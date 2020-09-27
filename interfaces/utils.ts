import { DocumentSnapshot } from "@firebase/firestore-types"
import { SubWeapon } from "./sub_weapons"
import { Weapon } from "./weapons"

export const buildSubWeapon = async (weapon_document_ref: DocumentSnapshot) =>  {
    let weapon = weapon_document_ref.data()
    if (!weapon) { throw new Error("No Weapon") }

    const sub_res = await weapon.sub_weapon.get()
    const sub_weapon =  sub_res.data() as SubWeapon
    weapon.sub_weapon = sub_weapon
    return weapon as Weapon
}
