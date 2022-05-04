import { atom, useRecoilState } from 'recoil'
import { Item, ItemId } from '../types/item'

export type AddItemPayload = Omit<Item, 'id'>

const itemsState = atom<Item[]>({
  key: 'itemState',
  default: [],
})

const useItems = () => {
  const [items, setItems] = useRecoilState(itemsState)

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

  return {
    items,
    addItem,
    removeItem,
  }
}

export default useItems
