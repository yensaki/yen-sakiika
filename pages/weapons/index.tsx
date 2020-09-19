// import { GetStaticProps } from 'next'
// import Link from 'next/link'
// import { Weapon } from '../../interfaces/weapons'

import Layout from '../../components/Layout'

// type Props = {
//     weapons: Weapon[]
// }

const WithStaticProps = () => (
    <Layout title="Weapons List">
        <h1>Weapons List</h1>
    </Layout>
)

// export const getStaticProps: GetStaticProps = async () => {
//     const weapons: Weapon[] = []
//     return { props: { weapons } } 
// }

export default WithStaticProps
