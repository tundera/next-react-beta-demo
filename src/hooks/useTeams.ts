import type { Team } from 'types'

import teams from 'data/teams.json'

const useTeams = () => {
  return { data: teams as Team[] }
}

export default useTeams
