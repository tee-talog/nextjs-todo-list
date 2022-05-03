import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button'
import Input from '../components/Input'
import List from '../components/List'
import ListItem from '../components/ListItem'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'

const Home: NextPage = () => {
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
          <form className="flex w-full flex-nowrap">
            <Input
              type="text"
              placeholder="例：TODO リストを確認する"
              className="mr-4 flex-1"
            />
            <Button type="submit">Add</Button>
          </form>
        </section>

        <section className="w-full">
          <SectionTitle className="sr-only">Items</SectionTitle>
          <List>
            <ListItem>
              <div className="flex justify-between gap-x-2">
                <h3>item</h3>
                <div>
                  <button type="button">Remove</button>
                </div>
              </div>
            </ListItem>
          </List>
        </section>
      </main>
    </div>
  )
}

export default Home
