import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import List from '../components/List'
import ListItem from '../components/ListItem'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'

// types
type ItemId = string
type Item = {
  id: ItemId
  title: string
}

type AddItemPayload = Omit<Item, 'id'>

// logic
const Container: NextPage = () => {
  const [items, setItems] = useState<Item[]>([])
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

  // debug
  useEffect(() => {
    addItem({ title: 'タスクその 1' })
    addItem({ title: 'タスクその 2' })
    addItem({ title: 'タスクその 3' })
  }, [])

  return <Presenter items={items} addItem={addItem} removeItem={removeItem} />
}

// presentation
type PresenterProps = {
  items: Item[]
  addItem: (payload: AddItemPayload) => void
  removeItem: (id: ItemId) => void
}

const Presenter = ({ items, addItem, removeItem }: PresenterProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>TODO List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </div>
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    addItem({ title })
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
  const handleClick = (id: ItemId) => {
    removeItem(id)
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

export default Container
