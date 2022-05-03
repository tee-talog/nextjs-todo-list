import * as itemLocalStorage from './implementation/item.localStorage'
import { IFetchItems } from './types'

// 実装の選択
export const fetchItems: IFetchItems = itemLocalStorage.fetchItems
