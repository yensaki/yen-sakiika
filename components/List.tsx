import * as React from 'react'
import ListItem from './ListItem'
import { Weapon } from '../interfaces/weapons'

type Props = {
  items: Weapon[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
