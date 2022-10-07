import Header from '@components/Header'
import AuthService from '@services/auth'
import { useState } from 'react'
import styles from './styles.module.css'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { DtoAuthLoginResponse } from '@services/auth/dtoAuthLoginResponse'

const LoginTemplate = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const enviarlogin = async (e: any) => {
    e.preventDefault()
    try {
      const response: DtoAuthLoginResponse = await AuthService.login(
        username,
        password
      )

      setCookie(null, 'token', response.token, {
        maxAge: 6000 * 6000 * 2
      })
      router.push('/')
    } catch (error) {}
  }
  return (
    <>
      <div className={styles.mainLogin}>
        <div className={styles.leftLogin}>
          <h1 className={styles.h1}>Entre para o mundo dos animes</h1>
          <img
            src="/images/gojo.png"
            alt=""
            className={styles.leftLoginimagem}
          />
        </div>
        <div className={styles.rightLogin}>
          <form className={styles.cardLogin} onSubmit={enviarlogin}>
            <h1 className={styles.h1}>Login</h1>
            <div className={styles.textfield}>
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                name="usuario"
                placeholder="usuario"
                value={username}
                onChange={value => setUsername(value.target.value)}
              />
            </div>

            <div className={styles.textfield}>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                placeholder="senha"
                value={password}
                onChange={value => setPassword(value.target.value)}
              />
            </div>

            <button
              type="submit"
              className={`${styles.btnLogin} ${styles.button}`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginTemplate
