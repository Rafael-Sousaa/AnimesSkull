import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Inputs, validation } from './validate'
import { useRouter } from 'next/router'
import AuthService from '@services/user'
import { DtoErrorCadastroResponse } from '@services/user/dtoResponses'

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
        } else {
          router.push('/login')
        }
      } catch (error) {
        const res = error as unknown as DtoErrorCadastroResponse
        setError([res.response.data.name, res.response.data.email])
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
