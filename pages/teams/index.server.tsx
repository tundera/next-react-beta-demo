import type { NextPage } from 'next'

import { Suspense } from 'react'

import LoadingSpinner from 'src/components/LoadingSpinner'
import TeamsGrid from 'src/components/TeamsGrid.server'
import Container from 'src/components/Container.client'

const TeamsPage: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          NBA Demo
        </h1>
        <h2 className="mb-12 text-xl text-gray-700 dark:text-gray-200">
          Made with Next.js, TailwindCSS, and React Query
        </h2>
        <Suspense fallback={<LoadingSpinner />}>
          <TeamsGrid />
        </Suspense>
      </div>
    </Container>
  )
}

export default TeamsPage
