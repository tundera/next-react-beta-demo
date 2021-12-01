import type { Team } from 'types'

import Image from 'next/image'
import NextLink from 'next/link'

import useTeam from 'src/hooks/useTeam'

type TeamCardProps = {
  team: Team
}

const TeamCard = ({ team }: TeamCardProps) => {
  const { data } = useTeam(team.ta)

  return (
    <a className="text-3xl font-extrabold">
      <article className="relative flex flex-col items-center justify-center h-48 bg-white shadow-2xl dark:bg-gray-900 w-80">
        <Image
          src={data?.logo as string}
          alt="Team image"
          layout="fill"
          objectFit="cover"
          className="-translate-x-4 opacity-10"
        />
        <span className="text-center">
          {team.city} {team.name}
        </span>
      </article>
    </a>
  )
}

export default TeamCard
