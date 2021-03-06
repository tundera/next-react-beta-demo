import type { NextPage } from 'next'

import Container from 'src/components/Container.client'

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          NBA Demo
        </h1>
        <h2 className="mb-12 text-xl text-gray-700 dark:text-gray-200">
          Made with Next.js, TailwindCSS, and React Query
        </h2>
      </div>
    </Container>
  )
}

export default Home
