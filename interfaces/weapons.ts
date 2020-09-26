import { SubWeapon } from './sub_weapons'

export type Weapon = {
    id: number,
    name: string,
    category: string,
    sub_weapon?: SubWeapon,
}
