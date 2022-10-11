import api from '..'
import { DtoAuthLoginResponse } from './dtoAuthLoginResponse'
import { DtoAuthValidateResponse } from './dtoAuthValidateResponse'
import { destroyCookie } from 'nookies'
import { DtoAuthCadastroResponse } from './dtoAuthCadastroResponse'

export default class AuthService {
  static async login(name: string, password: string) {
    const response = await api.post<DtoAuthLoginResponse>('/api/user/login', {
      email: name,
      password
    })
    return response.data
  }

  static async cadastrar(name: string, password: string, email: string) {
    const response = await api.post<DtoAuthCadastroResponse>('/api/user/user', {
      name,
      password,
      email
    })
    return response.data
  }

  static async validate(token: string) {
    const response = await api.get<DtoAuthValidateResponse>(
      `${
        process.env.NODE_ENV === 'production'
          ? 'https://animes-skull.vercel.app/api/user/validate'
          : 'http://localhost:3000/api/user/validate'
      }`,
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }
}

export const logout = () => {
  destroyCookie(null, 'token')
}
