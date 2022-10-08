import api from '..'
import { DtoAuthLoginResponse } from './dtoAuthLoginResponse'
import { DtoAuthValidateResponse } from './dtoAuthValidateResponse'
import { destroyCookie } from 'nookies'

export default class AuthService {
  static async login(name: string, password: string) {
    const response = await api.post<DtoAuthLoginResponse>('/api/login', {
      name,
      password
    })
    return response.data
  }

  static async validate(token: string) {
    const response = await api.get<DtoAuthValidateResponse>(
      `${
        process.env.NODE_ENV === 'production'
          ? 'https://animes-skull.vercel.app/api/validate'
          : 'http://localhost:3000/api/validate'
      }`,
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }
}

export const logout = () => {
  destroyCookie(null, 'sboc.token')
}
