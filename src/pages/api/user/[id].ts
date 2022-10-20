import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import { deleteUser, getUser, updateUser } from '@services/lib/db'
import bcrypt from 'bcrypt'
import validateUser from '@services/lib/validate'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'DELETE':
      try {
        await deleteUser(Number(id))
        res.status(200).json({ msg: 'Deleted successfully' })

        break
      } catch (error) {
        res.status(400).json({ error: true, msg: error })
        break
      }

    case 'GET':
      try {
        const dados = await getUser(Number(id))
        res.status(200).json(dados)
      } catch (error) {
        res.status(400).json({ error: true, msg: error })
      }
      break

    case 'PUT':
      try {
        const { name, email, password, img_perfil, img_fundo } = req.body

        let passwordHash: string | undefined = undefined
        if (password != null) {
          passwordHash = bcrypt.hashSync(password, 10)
        }

        const data = {
          name: name || undefined,
          email: email || undefined,
          password_hash: passwordHash,
          img_perfil: img_perfil || undefined,
          img_fundo: img_fundo || undefined
        }
        await updateUser(Number(id), data)

        res.status(200).json({ msg: 'Updated successfully' })
      } catch (error) {
        res.status(400).json({ error: true, msg: error })
      }
      break
    default:
      res.status(400).json({ error: true, msg: 'URL does not exist' })
      break
  }
}

export function validate(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const {
      query: { id },
      method
    } = req

    switch (method) {
      case 'DELETE' || 'PUT':
        try {
          const { authorization } = req.headers
          if (!authorization) throw new Error('error')

          const user = await validateUser(authorization)
          if (!user) throw new Error('error')

          if (user.id.toString() != id?.toString()) throw new Error('error')

          await handler(req, res)
        } catch (error) {
          return res.status(401).json({ error: true, msg: 'Login required' })
        }
        break
      default:
        await handler(req, res)
    }
  }
}

export default validate(handler)
