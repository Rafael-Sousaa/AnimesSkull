import type { NextApiRequest, NextApiResponse } from 'next'
import {
  createUser,
  getAllUsers,
  getUserEmail,
  getUserName
} from 'services/lib/db'
import bcrypt from 'bcrypt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  const { name, email, password } = req.body

  switch (method) {
    case 'GET':
      try {
        const data = await getAllUsers()

        res.status(200).json(data)
      } catch (error) {
        res.status(400).json({ error: true, msg: error })
      }
      break

    case 'POST':
      try {
        const passwordHash = bcrypt.hashSync(password, 10)
        const data = {
          name: name,
          email: email,
          password_hash: passwordHash,
          img_perfil: '/images/anyaperfil.png',
          img_fundo: '/images/eternityaperfilfundo.png'
        }

        await createUser(data)
        res
          .status(200)
          .json({ error: false, msg: 'Created successfully', data })
      } catch (error) {
        let dataName: string = ''
        let dataEmail: string = ''
        const userName = await getUserName(name)
        if (userName) {
          dataName = 'Nome já existe'
        }

        const userEmail = await getUserEmail(email)
        if (userEmail) {
          dataEmail = 'E-mail já existe'
        }

        res.status(400).json({
          error: true,
          name: dataName,
          email: dataEmail
        })
      }
      break

    default:
      res.status(400).json({ error: true, msg: 'URL does not exist' })
      break
  }
}
