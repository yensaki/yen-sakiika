import * as React from 'react'

import { Weapon } from '../interfaces/weapons'

type ListDetailProps = {
  item: Weapon
}

const ListDetail = ({ item: weapon }: ListDetailProps) => (
  <div>
    <h1>Detail for {weapon.name}</h1>
    <p>ID: {weapon.id}</p>
  </div>
)

export default ListDetail
