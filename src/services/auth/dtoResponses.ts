export interface DtoValidateResponse {
  error: boolean
  msg: string
}

export interface DtoLoginResponse {
  token: string
  user: {
    id: number
    name: string
    email: string
  }
}

export interface DtoCadastroResponse {
  msg: string
  error: boolean
  data: {
    name: string
    email: string
    password_hash: string
  }
}

export interface DtoErrorResponse {
  error: boolean
  msg: string
}

export interface DtoErrorCadastroResponse {
  error: boolean
  name: string
  email: string
}

export interface DtoSuccessResponse {
  msg: string
}
