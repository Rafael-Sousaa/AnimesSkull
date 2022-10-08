import api from '..'
import { DtoAuthLoginResponse } from './dtoAuthLoginResponse'
import { DtoAuthValidateResponse } from './dtoAuthValidateResponse'

export default class AuthService {
  static async login(name: string, password: string) {
    const response = await api.post<DtoAuthLoginResponse>('/api/login', {
      name,
      password
    })
    return response.data
  }

  static async validate(token: string) {
    // https://animes-skull.vercel.app/api/validate
    // http://localhost:3000/api/validate
    const response = await api.get<DtoAuthValidateResponse>(
      'https://animes-skull.vercel.app/api/validate',
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }
}
