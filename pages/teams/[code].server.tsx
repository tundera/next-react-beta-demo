import type { NextPage, GetServerSideProps } from 'next'

import { Suspense, lazy } from 'react'

import LoadingSpinner from 'src/components/LoadingSpinner'
import Container from 'src/components/Container.client'
import PlayersGrid from 'src/components/PlayersGrid.server'

type TeamPageProps = {
  code: string
}

const TeamPage: NextPage<TeamPageProps> = ({ code }) => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {/* {data.city} {data.name} */}
        </h1>
        <Suspense fallback={<LoadingSpinner />}>
          <PlayersGrid code={code} />
        </Suspense>
      </div>
    </Container>
  )
}

export default TeamPage

export const getServerSideProps: GetServerSideProps<TeamPageProps> = async ({ params }) => {
  return {
    props: {
      code: params?.code as string,
    },
  }
}
