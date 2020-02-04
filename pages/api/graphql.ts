import { NextApiResponse, NextApiRequest } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    test: 'SUUUP!PPPP M8'
  })
}