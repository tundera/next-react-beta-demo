import type { NextApiRequest, NextApiResponse } from 'next'
import type { Team } from 'types'

import teams from 'data/teams.json'

type Data = {
  team: Team
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { code } = req.body

  const team = teams.find((team) => team.ta === code) as Team
  res.status(200).json({ team })
}

export default handler
