import { GetStaticProps, GetStaticPaths } from 'next'

import { Weapon } from '../../interfaces/weapons'
import Layout from '../../components/Layout'
import '../../components/ListDetail'
import ListDetail from '../../components/ListDetail'
import fireStore from '../../interfaces/firebase'

type Props = {
    item?: Weapon
    errors?: string
}

const StaticPropsDetail = ({ weapon, errors }: Props) => {
    return (
        <Layout title="Weapon Detail">
            { weapon && <ListDetail item={weapon} />}
        </Layout>
    )
}

export default StaticPropsDetail

async function getResponse(id) {

    return fireStore.collection("weapons").doc(id.toString()).get()

}

async function getIndex() {

    console.log("eee")
    return fireStore.collection("weapons").get()

}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await getIndex()
    const paths = []
    await res.forEach((doc) => {
        paths.push({
            params: { id: doc.id.toString() }
        })
    })

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id
    console.log("getStaticProps")
    console.log(id)
    const res = await getResponse(id)
    const weapon = res.data()
    console.log(weapon)

    return { props: { weapon } } 
}
