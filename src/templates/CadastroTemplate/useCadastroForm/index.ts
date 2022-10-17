import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Inputs, validation } from './validate'
import { useRouter } from 'next/router'
import AuthService from '@services/auth'
import { DtoErrorCadastroResponse } from '@services/auth/dtoResponses'

const useCadastroForm = () => {
  const router = useRouter()
  const [error, setError] = React.useState<Array<string> | undefined>()

  const form = useForm<Inputs>({
    resolver: yupResolver(validation),
    mode: 'onBlur'
  })

  const submitForm: SubmitHandler<Inputs> = React.useCallback(
    async data => {
      try {
        setError([''])
        const response = await AuthService.cadastrar(
          data.name,
          data.password,
          data.email
        )
        if (response.error) {
          const res = response as unknown as DtoErrorCadastroResponse
          setError([res.name, res.email])
        } else {
          router.push('/login')
        }
      } catch {}
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
