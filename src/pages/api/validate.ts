import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

interface TokenPayload {
  name: string
  password: string
  iat: number
  exp: number
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers } = req
  const Bearer_token = headers.authorization
  const token = Bearer_token?.replace('Bearer ', '')

  switch (method) {
    case 'POST':
      try {
        const da = jwt.verify(token || '', process.env.TOKEN_SECRET || '')
        const { name, password } = da as TokenPayload

        if (name == process.env.NAME && password == process.env.PASSWORD) {
          res.status(200).json({ error: false })
        } else {
          res.status(400).json({ error: true })
        }
      } catch (error) {
        res.status(400).json({ error: true })
      }
      break
    default:
      res.status(400).json({ error: true, msg: 'URL does not exist' })
      break
  }
}
