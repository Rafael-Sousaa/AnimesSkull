import { User } from '@shared/interfaces'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from './styles.module.css'
import useFormularioForm from './useFormularioForm'
interface FormularioProps {
  user: User
  token: string
}
const Formulario = (props: FormularioProps) => {
  const form = useFormularioForm()
  useEffect(() => {
    form.setValue('id', props.user.id, { shouldValidate: true })
    form.setValue('token', props.token, { shouldValidate: true })
  }, [props.token, props.user.id])
  return (
    <>
      <div className={styles.rightCadastrar}>
        <form
          className={styles.cardCadastrar}
          onSubmit={form.handleSubmit(form.submitForm)}
        >
          <h1 className={styles.h1}>Atualizar Dados</h1>
          <div className={styles.textfield}>
            <label htmlFor="usuario">Nome</label>
            <input
              type="text"
              className={`form-control ${
                !!form.formState.errors.name && 'is-invalid'
              }`}
              placeholder="Nome"
              {...form.register('name')}
              defaultValue={props.user.name}
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
              defaultValue={props.user.email}
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
            Atualizar
          </button>

          <div className="text-danger">
            {form.error?.map(error => (
              <p key={error}>{error}</p>
            ))}
          </div>
        </form>
      </div>
    </>
  )
}

export default Formulario
