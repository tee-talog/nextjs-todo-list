import { atom, useRecoilStateLoadable } from 'recoil'
import * as ItemRepo from '../repositories/Item'
import { Item, ItemId } from '../types/item'

export type AddItemPayload = Omit<Item, 'id'>

const itemsState = atom<Item[]>({
  key: 'itemState',
  default: new Promise((ok) => ItemRepo.fetchItems().then(ok)),
})

const useItems = () => {
  const [itemsLoadable, setItems] = useRecoilStateLoadable(itemsState)

  const addItem = async (payload: AddItemPayload) => {
    const item = await ItemRepo.addItem(payload)
    setItems((items) => [...items, item])
  }

  const removeItem = async (id: ItemId) => {
    await ItemRepo.removeItem(id)
    setItems((items) => items.filter((item) => item.id !== id))
  }

  return [
    itemsLoadable,
    {
      addItem,
      removeItem,
    },
  ] as const
}

export default useItems
