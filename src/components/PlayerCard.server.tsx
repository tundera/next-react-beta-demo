import type { Player } from 'types'

import Image from 'next/image'

import useTeam from 'src/hooks/useTeam'

type PlayerCardProps = {
  player: Player
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const { data } = useTeam(player.ta)

  return (
    <article className="relative flex flex-col justify-end h-48 bg-white shadow-2xl dark:bg-gray-900 w-80">
      <Image
        src={data?.logo as string}
        alt="Team image"
        layout="fill"
        objectFit="cover"
        className="-translate-x-4 opacity-10"
      />
      <div className="pt-2">
        <div className="flex items-end mx-4 justify-evenly">
          <Image
            src={player?.headshot as string}
            alt="Team image"
            layout="fixed"
            width={120}
            height={120}
            objectFit="cover"
          />
          <div className="ml-2">
            <p className="w-full text-sm font-medium tracking-tight text-gray-500 md:text-md dark:text-gray-400">
              #{player.num} | {player.pos}
            </p>
            <p className="w-full mb-6 font-medium tracking-tight text-gray-900 text-md md:text-lg sm:mb-10 dark:text-gray-100">
              {player.fn} {player.ln}
            </p>
          </div>
          <div className="self-start">
            <Image
              src={data?.logo as string}
              alt="Team logo"
              layout="fixed"
              width={50}
              height={50}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-3 text-gray-800 border-t-4 divide-x-2 divide-black dark:text-gray-200"
        style={{ borderTopColor: data?.color }}
      >
        <div className="py-1 text-center">
          <p className="text-xs font-bold uppercase">PPG</p>
          <p className="text-xs">{player.pts ?? '---'}</p>
        </div>
        <div className="py-1 text-center">
          <p className="text-xs font-bold uppercase">RPG</p>
          <p className="text-xs">{player.reb ?? '---'}</p>
        </div>
        <div className="py-1 text-center">
          <p className="text-xs font-bold uppercase">APG</p>
          <p className="text-xs">{player.ast ?? '---'}</p>
        </div>
      </div>
    </article>
  )
}

export default PlayerCard
