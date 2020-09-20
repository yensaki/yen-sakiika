import { GetStaticProps, GetStaticPaths } from 'next'

import { Weapon } from '../../interfaces/weapons'
import Layout from '../../components/Layout'
import '../../components/ListDetail'
import ListDetail from '../../components/ListDetail'
import fireStore from '../../interfaces/firebase'

type Props = {
    weapon?: Weapon
}

type Param = {
    id: string
}

type Path = {
    params: Param
}

const StaticPropsDetail = ({ weapon }: Props) => {
    return (
        <Layout title="Weapon Detail">
            { weapon && <ListDetail item={weapon} />}
        </Layout>
    )
}

export default StaticPropsDetail

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
    if ( typeof id !== "string") {
        id = "0"
    }
    const res = await getResponse(id)
    const weapon = res.data()

    return { props: { weapon } } 
}
