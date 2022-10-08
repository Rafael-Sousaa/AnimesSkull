import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage
} from 'next'
import { checkIfIsLoggedIn } from 'shared/helpers/auth'
import PageTemplate from '@templates/PageTemplate'
import HomeTemplate from '@templates/HomeTemplate'

const Home: NextPage = () => {
  return (
    <PageTemplate>
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
      props: {}
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
