// アプリ全体で使用する型定義
export type ItemId = string

export type Item = {
  id: ItemId
  title: string
}

// TODO ライブラリ導入したい（typescanner）
export const isItem = (item: unknown): item is Item => {
  if (!(item != null && typeof item === 'object')) {
    return false
  }
  if (!('id' in item && 'title' in item)) {
    return false
  }
  const _item = item as { id: unknown; title: unknown }
  return typeof _item.id === 'string' && typeof _item.title === 'string'
}
