import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import validateUser from 'services/lib/validate'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Ok' })
}

export function validate(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { authorization } = req.headers
      if (!authorization) throw new Error('error')

      const user = await validateUser(authorization)
      if (!user) throw new Error('error')
    } catch (error) {
      return res.status(401).json({ error: true, msg: 'Login required' })
    }
    await handler(req, res)
  }
}

export default validate(handler)
