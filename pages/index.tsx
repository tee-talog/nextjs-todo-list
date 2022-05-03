import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button'
import Input from '../components/Input'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TODO List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <PageTitle>TODO List</PageTitle>

        <section>
          <SectionTitle>add item</SectionTitle>
          <form>
            <Input type="text" placeholder="例：TODO リストを見る" />
            <Button type="submit">Add</Button>
          </form>
        </section>

        <section>
          <SectionTitle>items</SectionTitle>
          <ul>
            <li>
              <div>
                <h3>item</h3>
                <div>
                  <button type="button">Remove</button>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Home
