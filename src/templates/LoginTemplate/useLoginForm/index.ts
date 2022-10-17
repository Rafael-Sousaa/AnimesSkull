import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { setCookie } from 'nookies'

import { Inputs, isEmail, validation } from './validate'
import { useRouter } from 'next/router'
import AuthService from '@services/auth'

const useLoginForm = () => {
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
        let name: string = ''
        let email: string = ''

        isEmail.isValid(data.name).then(valid => {
          if (valid == true) {
            email = data.name
          } else {
            name = data.name
          }
        })

        const response = await AuthService.login(name, email, data.password)
        if (!response.token) throw new Error()

        setCookie(null, 'token', response.token, {
          maxAge: 60 * 60 * 24 * 30
        })
        router.push('/')
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

export default useLoginForm
