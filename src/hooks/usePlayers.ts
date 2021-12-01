import type { Player } from 'types'

import players from 'data/players.json'

const usePlayers = (code: string) => {
  return { data: players.filter((player) => player.ta === code) as Player[] }
}

export default usePlayers
