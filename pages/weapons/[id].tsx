import { GetStaticProps, GetStaticPaths } from 'next'

import { Weapon } from '../../interfaces/weapons'
import { SubWeapon } from '../../interfaces/sub_weapons'
import Layout from '../../components/Layout'
import '../../components/ListDetail'
import ListDetail from '../../components/ListDetail'
import fireStore from '../../interfaces/firebase'
import { DocumentSnapshot } from '@firebase/firestore-types'

type Props = {
    weapon?: Weapon
}

type Param = {
    id: string
}

type Path = {
    params: Param
}

const Detail = ({ weapon }: Props) => {
    return (
        <Layout title="Weapon Detail">
            { weapon && <ListDetail item={weapon} />}
        </Layout>
    )
}

export default Detail

async function getResponse(id: string) {
    return fireStore.collection("weapons").doc(id).get()
}

async function getIndex() {
    return fireStore.collection("weapons").get()
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await getIndex()
    const paths: Path[] = []
    await res.forEach((doc) => {
        paths.push({
            params: { id: doc.id.toString() }
        })
    })

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let id = params?.id
    if (!id) {
        id = "0"
    }
    const res = await getResponse(id.toString())
    const weapon = await buildSubWeapon(res) as Weapon

    return { props: { weapon } } 
}

async function buildSubWeapon (weapon_document_ref: DocumentSnapshot): Promise<Weapon> {
    let weapon = weapon_document_ref.data()
    if (!weapon) { throw new Error("No Weapon") }

    const sub_res = await weapon.sub_weapon.get()
    const sub_weapon =  sub_res.data() as SubWeapon
    weapon.sub_weapon = sub_weapon
    return weapon as Weapon
}
