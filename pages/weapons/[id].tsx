import { GetStaticProps, GetStaticPaths } from 'next'

import { Weapon } from '../../interfaces/weapons'
import Layout from '../../components/Layout'
import '../../components/ListDetail'
import ListDetail from '../../components/ListDetail'

type Props = {
    item?: Weapon
    errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
    return (
        <Layout tiel="Weapon Detail">
            { item && <ListDetail item={item} />}
        </Layout>
    )
}

export default StaticPropsDetail

// export const getStaticPaths: GetStaticPaths = async () => {
//     const paths = 
// }
