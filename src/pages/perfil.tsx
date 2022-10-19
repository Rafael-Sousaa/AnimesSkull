import getUser from '@services/lib/getUser'
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
    <PageTemplate>
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

    const user = (await getUser(loggedIn.token)) as User
    if (!user) throw new Error('error')
    return {
      props: { user }
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
