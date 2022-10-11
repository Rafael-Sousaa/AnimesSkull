import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Inputs, validation } from './validate'
import { useRouter } from 'next/router'
import AuthService from '@services/auth'

const useCadastroForm = () => {
  const router = useRouter()
  const [error, setError] = React.useState<boolean>()

  const form = useForm<Inputs>({
    resolver: yupResolver(validation),
    mode: 'onBlur'
  })

  const submitForm: SubmitHandler<Inputs> = React.useCallback(
    async data => {
      try {
        setError(false)
        const response = await AuthService.cadastrar(
          data.name,
          data.password,
          data.email
        )
        if (response.error) throw new Error()

        router.push('/login')
      } catch {
        setError(true)
      }
    },
    [router]
  )

  return {
    ...form,
    submitForm,
    error
  }
}

export default useCadastroForm
