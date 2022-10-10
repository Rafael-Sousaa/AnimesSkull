import * as yup from 'yup'

export const validation = yup.object({
  name: yup.string().required('O Campo não pode estar vazio'),
  password: yup.string().required('O Campo não pode estar vazio'),
  email: yup
    .string()
    .required('O Campo não pode estar vazio')
    .email('E-mail inválido')
})

export interface Inputs extends yup.InferType<typeof validation> {}
