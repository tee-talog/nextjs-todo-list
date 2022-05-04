import { isItem } from '../../types/item'
import { IAddItem, IFetchItems, IRemoveItem } from '../types'

// TODO 型安全に定義するならこれ
// https://zenn.dev/jiftechnify/articles/2489f4103918a2

const key = {
  ITEMS: 'store.items',
}

export const fetchItems: IFetchItems = async () => {
  const itemsString = window.localStorage.getItem(key.ITEMS) ?? '[]'
  const items = JSON.parse(itemsString)
  if (items && items.every(isItem)) {
    return items
  }
  return []
}

export const addItem: IAddItem = async (payload) => {
  const id = Math.random().toString()
  const item = {
    id,
    title: payload.title,
  }
  const items = await fetchItems()
  const newItems = [...items, item]
  window.localStorage.setItem(key.ITEMS, JSON.stringify(newItems))
  return item
}

export const removeItem: IRemoveItem = async (id) => {
  const items = await fetchItems()
  const newItems = items.filter((item) => item.id !== id)
  window.localStorage.setItem(key.ITEMS, JSON.stringify(newItems))
}
