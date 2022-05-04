import { isItem } from '../../types/item'
import { IFetchItems } from '../types'

// TODO 型安全に定義するならこれ
// https://zenn.dev/jiftechnify/articles/2489f4103918a2

const key = {
  ITEMS: 'store.items',
}

export const fetchItems: IFetchItems = async () => {
  const itemsString = localStorage.getItem(key.ITEMS) ?? '[]'
  const items = JSON.parse(itemsString)
  if (items && items.every(isItem)) {
    return items
  }
  return []
}
