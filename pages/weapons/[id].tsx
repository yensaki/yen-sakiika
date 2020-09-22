import { GetStaticProps, GetStaticPaths } from 'next'

import { Weapon } from '../../interfaces/weapons'
import Layout from '../../components/Layout'
import '../../components/ListDetail'
import ListDetail from '../../components/ListDetail'
import fireStore from '../../interfaces/firebase'

type Props = {
    weapon?: Weapon
}

const Detail = ({ weapon }: Props) => {
    return (
        <Layout title="Weapon Detail">
            { weapon && <ListDetail item={weapon} />}
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps<Props> = async (context: any) => {
    let id =  "1"
    if (context && context.params) {
        id = context.params.id
    }
    const res = await getResponse(id)
    const weapon = res.data() as Weapon
    return { props: { weapon }, revalidate: 1, }
}

export default Detail

async function getResponse(id: string) {
    console.log("getResponse")
    return fireStore.collection("weapons").doc(id).get()
}
