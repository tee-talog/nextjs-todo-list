import * as itemLocalStorage from './implementation/item.localStorage'
import { IAddItem, IFetchItems, IRemoveItem } from './types'

// 実装の選択
export const fetchItems: IFetchItems = itemLocalStorage.fetchItems
export const addItem: IAddItem = itemLocalStorage.addItem
export const removeItem: IRemoveItem = itemLocalStorage.removeItem
