import { GetStaticProps } from 'next'
// import Link from 'next/link'
import { Weapon } from '../../interfaces/weapons'

import Layout from '../../components/Layout'
import List from '../../components/List'
import fireStore from '../../interfaces/firebase'

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

async function getResponse() {
    return fireStore.collection("weapons").get()
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await getResponse()
    const weapons: Weapon[] = []
    await res.forEach((doc) => {
        const weapon = doc.data() as Weapon
        weapons.push(weapon)
    });

    return { props: { weapons } } 
}

export default WithStaticProps
