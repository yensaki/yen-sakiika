// import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Weapon } from '../../interfaces/weapons'
import { SubWeapon } from '../../interfaces/sub_weapons'

import Layout from '../../components/Layout'
import List from '../../components/List'
import fireStore from '../../interfaces/firebase'
import { DocumentSnapshot, DocumentReference } from '@firebase/firestore-types'

type Props = {
    weapons: Weapon[]
}

const WithStaticProps = ({ weapons }: Props) => (
    <Layout title="Weapons List">
        <h1>Weapons List</h1>
        <p>You are currently on: /weapons</p>
        <List weapons={weapons} />
    </Layout>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fireStore.collection("weapons").get()
    const weapons: Weapon[] = []
    res.forEach((doc) => {
        const weapon = buildSubWeapon(doc)
        weapons.push(weapon)
    });

    return { props: { weapons } } 
}

function buildSubWeapon (weapon_document_ref: DocumentSnapshot): Weapon {
    let weapon = weapon_document_ref.data()
    console.log(weapon)
    if (!weapon) { throw new Error("No Weapon") }

    weapon.sub_weapon = null
    return weapon as Weapon
}

export default WithStaticProps
