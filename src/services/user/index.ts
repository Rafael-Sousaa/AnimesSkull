import api from '..'
import * as dto from './dtoResponses'
import { destroyCookie } from 'nookies'

export default class AuthService {
  static async login(name: string, email: string, password: string) {
    const response = await api.post<dto.DtoLoginResponse>('/api/user/login', {
      email,
      name,
      password
    })
    return response.data
  }

  static async cadastrar(name: string, password: string, email: string) {
    const response = await api.post<dto.DtoCadastroResponse>('/api/user', {
      name,
      password,
      email
    })
    return response.data
  }

  static async atualizar(
    id: number,
    name: string,
    password: string | null,
    email: string,
    token: string
  ) {
    const response = await api.put<dto.DtoSuccessResponse>(
      `/api/user/${id}`,
      {
        name,
        password,
        email,
        img_perfil: undefined,
        img_fundo: undefined
      },
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }
  static async atualizarImg(
    id: number,
    token: string,
    img_perfil: string | undefined,
    img_fundo: string | undefined
  ) {
    const response = await api.put<dto.DtoSuccessResponse>(
      `/api/user/${id}`,
      {
        img_perfil,
        img_fundo
      },
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }

  static async deletar(id: number, token: string) {
    const response = await api.delete<dto.DtoSuccessResponse>(
      `/api/user/${id}`,
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }

  static async buscarUsuario(id: number, token: string) {
    const response = await api.get<dto.DtoUserResponse>(`/api/user/${id}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    return response.data
  }

  static async validate(token: string) {
    const response = await api.get<dto.DtoValidateResponse>(
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
