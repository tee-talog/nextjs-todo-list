import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TODO List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>TODO List</h1>
        <section>
          <h2>add item</h2>
          <form>
            <input type="text" />
            <button type="submit">Add</button>
          </form>
        </section>

        <section>
          <h2>items</h2>
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
