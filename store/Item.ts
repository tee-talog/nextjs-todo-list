import { atom, useRecoilStateLoadable } from 'recoil'
import { fetchItems } from '../repositories/Item'
import { Item, ItemId } from '../types/item'

export type AddItemPayload = Omit<Item, 'id'>

const itemsState = atom<Item[]>({
  key: 'itemState',
  default: new Promise((ok) => fetchItems().then(ok)),
})

const useItems = () => {
  const [itemsLoadable, setItems] = useRecoilStateLoadable(itemsState)

  const addItem = (payload: AddItemPayload) => {
    // TODO 本当はランダム値じゃないほうがいい
    const id = Math.random().toString()
    const item = {
      id,
      title: payload.title,
    }
    setItems((items) => [...items, item])
  }

  const removeItem = (id: ItemId) => {
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
