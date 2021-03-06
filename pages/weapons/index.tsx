// import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Weapon } from '../../interfaces/weapons'

import Layout from '../../components/Layout'
import List from '../../components/List'
import fireStore from '../../interfaces/firebase'
import { buildSubWeapon } from '../../interfaces/utils'

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
    res.docs.forEach(async (doc) => {
        weapons.push(await buildSubWeapon(doc))
    });

    return { props: { weapons } } 
}

export default WithStaticProps
