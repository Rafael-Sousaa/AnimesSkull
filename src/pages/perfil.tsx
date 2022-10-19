import { checkIfIsLoggedIn } from '@shared/helpers/auth'
import { User } from '@shared/interfaces'
import PageTemplate from '@templates/PageTemplate'
import PerfilTemplate from '@templates/PerfilTemplate'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export interface perfilprops {
  user: User
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
      props: { user: loggedIn.user }
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
