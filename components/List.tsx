import * as React from 'react'
import ListItem from './ListItem'
import { Weapon } from '../interfaces/weapons'

type Props = {
  weapons: Weapon[]
}

const List = ({ weapons }: Props) => (
  <ul>
    {weapons.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
