import React from 'react'
import Link from 'next/link'

import { Weapon } from '../interfaces/weapons'

type Props = {
  data: Weapon
}

const ListItem = ({ data }: Props) => (
  <Link href="/weapons/[id]" as={`/weapons/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
