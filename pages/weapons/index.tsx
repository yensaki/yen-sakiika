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
        <p>
            Example fetching data from inside <code>getStaticProps()</code>.
        </p>
        <p>You are currently on: /weapons</p>
        <List weapons={weapons} />
    </Layout>
)

 async function getResponse() {

    console.log("eee")
    return fireStore.collection("weapons").get()

}

export const getStaticProps: GetStaticProps = async () => {
    // const weapons: Weapon[] = [{id: 1, name: 'a'}]
    const res = await getResponse()
    const weapons: Weapon[] = []
    await res.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data().name)
        weapons.push(doc.data())
    });

    return { props: { weapons } } 
}

export default WithStaticProps
