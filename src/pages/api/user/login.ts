import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { getUserEmail, getUserName } from 'services/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'POST':
      try {
        const { name: name2, email: email2, password } = req.body

        if ((name2 === '' && email2 === '') || !password) {
          return res.status(400).json({ error: true, msg: 'Dados inválidos' })
        }
        let user

        if (email2 !== '') {
          user = await getUserEmail(email2)
        } else {
          user = await getUserName(name2)
        }

        if (!user) {
          return res
            .status(400)
            .json({ error: true, msg: 'Usuário não encontrado' })
        }

        if (!(await bcrypt.compare(password.toString(), user.password_hash))) {
          return res.status(400).json({ error: true, msg: 'Senha inválida' })
        }

        const { id, name, email } = user
        const token = jwt.sign(
          { id, name, email },
          process.env.TOKEN_SECRET || '',
          {
            expiresIn: process.env.TOKEN_EXPIRATION
          }
        )

        res.status(200).json({ token, user: { id, name, email } })
      } catch (error) {
        res.status(400).json({ error: true, msg: 'Usuário não encontrado' })
      }
      break

    default:
      res.status(400).json({ error: true, msg: 'URL does not exist' })
      break
  }
}
