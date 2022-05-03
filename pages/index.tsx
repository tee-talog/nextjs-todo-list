import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import List from '../components/List'
import ListItem from '../components/ListItem'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'

// types
type Item = {
  id: string
  title: string
}

// logic
const Container: NextPage = () => {
  const [items, setItems] = useState<Item[]>([])
  const addItem = (item: Item) => {
    setItems((items) => [...items, item])
  }

  // debug
  useEffect(() => {
    addItem({
      id: '1',
      title: 'タスクその 1',
    })
    addItem({
      id: '2',
      title: 'タスクその 2',
    })
    addItem({
      id: '3',
      title: 'タスクその 3',
    })
  }, [])

  return <Presenter items={items} addItem={addItem} />
}

// presentation
type PresenterProps = {
  items: Item[]
  addItem: (item: Item) => void
}

const Presenter = ({ items, addItem }: PresenterProps) => {
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
          <ItemList items={items} />
        </section>
      </main>
    </div>
  )
}

// components
type AddItemFormProps = {
  addItem: (item: Item) => void
}

const AddItemForm = ({ addItem }: AddItemFormProps) => {
  const [title, setTitle] = useState('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    addItem({
      id: Math.random().toString(),
      title,
    })
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
}

const ItemList = ({ items }: ItemListProps) => (
  <List>
    {items.map((item) => (
      <ListItem key={item.id}>
        <div className="flex items-center justify-between gap-x-2">
          <p className="text-left">{item.title}</p>
          <Button type="button">Remove</Button>
        </div>
      </ListItem>
    ))}
  </List>
)

export default Container
