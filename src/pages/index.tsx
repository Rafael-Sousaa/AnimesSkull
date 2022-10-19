import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { checkIfIsLoggedIn } from 'shared/helpers/auth'
import PageTemplate from '@templates/PageTemplate'
import HomeTemplate from '@templates/HomeTemplate'

interface homeProps {
  img: string
}
const Home = (props: homeProps) => {
  return (
    <PageTemplate img={props.img}>
      <HomeTemplate />
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
      props: {
        img: loggedIn.user.img_perfil
      }
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

export default Home
