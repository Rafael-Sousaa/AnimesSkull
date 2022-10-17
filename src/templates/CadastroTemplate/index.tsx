import Link from 'next/link'
import styles from './styles.module.css'
import useCadastroForm from './useCadastroForm'
const CadastroTemplate = () => {
  const form = useCadastroForm()
  return (
    <>
      <div className={styles.mainCadastrar}>
        <div className={styles.leftCadastrar}>
          <h1 className={styles.h1}>Entre para o mundo dos animes</h1>

          <img
            src="/images/gojo.png"
            alt=""
            className={`${styles.leftCadastrarimagem} pt-sm-4`}
          />
        </div>
        <div className={styles.rightCadastrar}>
          <form
            className={styles.cardCadastrar}
            onSubmit={form.handleSubmit(form.submitForm)}
          >
            <h1 className={styles.h1}>Cadastre-se</h1>
            <div className={styles.textfield}>
              <label htmlFor="usuario">Nome</label>
              <input
                type="text"
                className={`form-control ${
                  !!form.formState.errors.name && 'is-invalid'
                }`}
                placeholder="Nome"
                {...form.register('name')}
              />
            </div>
            <div className="text-danger">
              {form.formState.errors.name?.message}
            </div>
            <div className={styles.textfield}>
              <label htmlFor="usuario">E-mail</label>
              <input
                type="email"
                className={`form-control ${
                  !!form.formState.errors.email && 'is-invalid'
                }`}
                placeholder="E-mail"
                {...form.register('email')}
              />
            </div>
            <div className="text-danger">
              {form.formState.errors.email?.message}
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
              className={styles.btnCadastrar}
              disabled={
                form.formState.isSubmitting || form.formState.isValidating
              }
            >
              Cadastrar
            </button>

            <div className="text-danger">
              {form.error?.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
            <Link href={'/login'}>
              <a className={styles.link}>Fazer Login</a>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default CadastroTemplate
