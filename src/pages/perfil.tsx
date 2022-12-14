import { checkIfIsLoggedIn } from '@shared/helpers/auth'
import { User } from '@shared/interfaces'
import PageTemplate from '@templates/PageTemplate'
import PerfilTemplate from '@templates/PerfilTemplate'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export interface perfilprops {
  user: User
  token: string
}
export interface perfilimgprops {
  user: User
  token: string
  setimg: Function
  setshow: Function
}

const Perfil = (props: perfilprops) => {
  return (
    <PageTemplate img={props.user.img_perfil}>
      <PerfilTemplate {...props} />
    </PageTemplate>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const loggedIn = await checkIfIsLoggedIn(context)
    if (!loggedIn.token) throw new Error('error')

    return {
      props: { user: loggedIn.user, token: loggedIn.token }
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
}

export default Perfil
