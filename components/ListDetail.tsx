import * as React from 'react'

import { Weapon } from '../interfaces/weapons'

type ListDetailProps = {
  item: Weapon
}

const ListDetail = ({ item: weapon }: ListDetailProps) => (
  <div>
    <h1>Detail for {weapon.name}</h1>
    <p>ID: {weapon.id}</p>
    <p>Category: {weapon.category}</p>
    {weapon.sub_weapon ? (
      <p>SubWeapon: {weapon.sub_weapon.name}</p>
    ) : ""}
    
  </div>
)

export default ListDetail
