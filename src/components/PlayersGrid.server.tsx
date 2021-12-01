import { Suspense } from 'react'

import PlayerCard from 'src/components/PlayerCard.server'
import IntersectionSlide from 'src/components/IntersectionSlide.client'
import usePlayers from 'src/hooks/usePlayers'

type PlayersGridProps = {
  code: string
}

const PlayersGrid = ({ code }: PlayersGridProps) => {
  const { data } = usePlayers(code)

  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-16">
      {data?.map((player) => (
        <IntersectionSlide key={player.slug}>
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center h-48 bg-gray-300 animate-pulse w-80"></div>
            }
          >
            <PlayerCard player={player} />
          </Suspense>
        </IntersectionSlide>
      ))}
    </div>
  )
}

export default PlayersGrid
