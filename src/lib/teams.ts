import type { Team } from 'types'

// import teams from 'data/teams.json'

// export const getTeams = async () => {
//   const data = await new Promise<Team[]>((resolve, reject) => {
//     setTimeout(() => {
//       resolve(teams)
//     }, 3000)
//   })

//   return data
// }

export const getTeams = async () => {
  const response = await fetch('/api/teams')
  const json = await response.json()

  return json.teams as Team[]
}

export const getTeamByCode = async (code: string) => {
  const response = await fetch(`/api/teams/${code}`)
  const json = await response.json()

  return json.team as Team
}
