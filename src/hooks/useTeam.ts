import type { Team } from 'types'

import teams from 'data/teams.json'

const useTeam = (code: string) => {
  return { data: teams.find((team) => team.ta === code) as Team }
}

export default useTeam
