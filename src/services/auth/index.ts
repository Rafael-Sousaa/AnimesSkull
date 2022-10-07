import api from '..'
import { DtoAuthLoginResponse } from './dtoAuthLoginResponse'

export default class AuthService {
  static async login(name: string, password: string) {
    const response = await api.post<DtoAuthLoginResponse>('/api/login', {
      name,
      password
    })
    return response.data
  }

  static async me(token: string) {
    const response = await api.post<DtoAuthLoginResponse>('/api/validate', {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  }
}
