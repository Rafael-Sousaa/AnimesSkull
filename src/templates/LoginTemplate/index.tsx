import Link from 'next/link'
import styles from './styles.module.css'
import useLoginForm from './useLoginForm'

const LoginTemplate = () => {
  const form = useLoginForm()

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
          <form
            className={styles.cardLogin}
            onSubmit={form.handleSubmit(form.submitForm)}
          >
            <h1 className={styles.h1}>Login</h1>
            <div className={styles.textfield}>
              <label htmlFor="usuario">E-mail ou Nome</label>
              <input
                type="text"
                className={`form-control ${
                  !!form.formState.errors.name && 'is-invalid'
                }`}
                placeholder="E-mail ou Nome"
                {...form.register('name')}
              />
            </div>
            <div className="text-danger">
              {form.formState.errors.name?.message}
            </div>
            <div className={styles.textfield}>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                className={`form-control ${
                  !!form.formState.errors.password && 'is-invalid'
                }`}
                placeholder="Senha"
                {...form.register('password')}
              />
            </div>
            <div className="text-danger">
              {form.formState.errors.password?.message}
            </div>
            <button
              type="submit"
              className={styles.btnLogin}
              disabled={
                form.formState.isSubmitting || form.formState.isValidating
              }
            >
              Login
            </button>
            <div className="text-danger">{form.error}</div>
            <Link href={'/cadastro'}>
              <a className={styles.link}>Cadastre-se</a>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginTemplate
