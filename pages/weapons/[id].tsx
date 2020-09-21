import { NextPage } from 'next'

import { Weapon } from '../../interfaces/weapons'
import Layout from '../../components/Layout'
import '../../components/ListDetail'
import ListDetail from '../../components/ListDetail'
import fireStore from '../../interfaces/firebase'

type Props = {
    weapon?: Weapon
}

const Detail: NextPage<Props> = ({ weapon }) => {
    return (
        <Layout title="Weapon Detail">
            { weapon && <ListDetail item={weapon} />}
        </Layout>
    )
}

export const getServerSideProps = async (context: any) => {
    let id =  "1"
    if (context) {
        id = context.query.id
    }
    const res = await getResponse(id)
    const weapon = res.data() as Weapon
    return { props: { weapon } }
}

export default Detail

async function getResponse(id: string) {
    console.log("getResponse")
    return fireStore.collection("weapons").doc(id).get()
}
