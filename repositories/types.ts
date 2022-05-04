import { Item, ItemId } from '../types/item'

export type AddItemPayload = Omit<Item, 'id'>

// repository 関数のインターフェース定義
export type IFetchItems = () => Promise<Item[]>
export type IAddItem = (payload: AddItemPayload) => Promise<Item>
export type IRemoveItem = (id: ItemId) => Promise<void>
