export interface DtoAuthCadastroResponse {
  message: string
  error: boolean
  data?: {
    name: string
    email: string
    password_hash: string
  }
}
