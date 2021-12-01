import { Suspense } from 'react'
import NextLink from 'next/link'

import TeamCard from 'src/components/TeamCard.server'
import IntersectionSlide from 'src/components/IntersectionSlide.client'
import useTeams from 'src/hooks/useTeams'

const TeamsGrid = () => {
  const { data } = useTeams()

  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-16">
      {data?.map((team) => (
        <IntersectionSlide key={team.tid}>
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center h-48 bg-gray-300 animate-pulse w-80"></div>
            }
          >
            <NextLink href={`/teams/${team.ta}`} as={`/teams/${team.tid}`} passHref>
              <TeamCard team={team} />
            </NextLink>
          </Suspense>
        </IntersectionSlide>
      ))}
    </div>
  )
}

export default TeamsGrid
