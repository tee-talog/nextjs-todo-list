import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import List from '../components/List'
import ListItem from '../components/ListItem'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'
import useItems, { AddItemPayload } from '../store/Item'
import { Item, ItemId } from '../types/item'

const Page: NextPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center">
    <Head>
      <title>TODO List</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container />
  </div>
)

// logic
const Container = () => {
  const [{ state, contents }, { addItem, removeItem }] = useItems()

  switch (state) {
    case 'hasValue': {
      return (
        <Presenter items={contents} addItem={addItem} removeItem={removeItem} />
      )
    }
    case 'loading': {
      // TODO ロード画面を表示 or ロード中表示の Presenter を表示
      return <div>loading</div>
    }
    case 'hasError': {
      // TODO エラー画面表示
      return <div>error</div>
    }
    default: {
      const _: never = state
      return null
    }
  }
}

// presentation
type PresenterProps = {
  items: Item[]
  addItem: (payload: AddItemPayload) => void
  removeItem: (id: ItemId) => void
}

const Presenter = ({ items, addItem, removeItem }: PresenterProps) => {
  return (
    <>
      <header className="flex h-16 w-full items-center bg-green-200 drop-shadow">
        <PageTitle className="px-2">TODO List</PageTitle>
      </header>

      <main
        className={clsx(
          'w-full max-w-screen-md px-4 py-8',
          'flex flex-1 flex-col items-center gap-y-8',
          'text-center'
        )}
      >
        <section className="flex w-full flex-col items-center">
          <SectionTitle className="sr-only">Add Item</SectionTitle>
          <AddItemForm addItem={addItem} />
        </section>

        <section className="w-full">
          <SectionTitle className="sr-only">Items</SectionTitle>
          <ItemList items={items} removeItem={removeItem} />
        </section>
      </main>
    </>
  )
}

// components
type AddItemFormProps = {
  addItem: (payload: AddItemPayload) => void
}

const AddItemForm = ({ addItem }: AddItemFormProps) => {
  const [title, setTitle] = useState('')
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    await addItem({ title })
    setTitle('')
  }

  return (
    <form className="flex w-full flex-nowrap" onSubmit={handleSubmit}>
      <label className="mr-4 flex flex-1 items-center">
        <span className="mr-2">タイトル</span>
        <Input
          type="text"
          className="flex-1"
          placeholder="例：TODO リストを確認する"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </label>
      <Button type="submit">Add</Button>
    </form>
  )
}

type ItemListProps = {
  items: Item[]
  removeItem: (id: ItemId) => void
}

const ItemList = ({ items, removeItem }: ItemListProps) => {
  const handleClick = async (id: ItemId) => {
    await removeItem(id)
  }

  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <div className="flex items-center justify-between gap-x-2">
            <p className="text-left">{item.title}</p>
            <Button type="button" onClick={(_) => handleClick(item.id)}>
              Remove
            </Button>
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default Page
