export interface DtoAuthLoginResponse {
  token: string
  user: {
    id: number
    name: string
    email: string
  }
}
