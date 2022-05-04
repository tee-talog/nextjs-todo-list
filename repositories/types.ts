import { Item } from '../types/item'

// repository 関数のインターフェース定義
export type IFetchItems = () => Promise<Item[]>
