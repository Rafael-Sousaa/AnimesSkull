import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage
} from 'next'
import { checkIfIsLoggedIn } from 'shared/helpers/auth'
import AnimesMock from '@shared/mocks/Animes'
import Link from 'next/link'
import PageTemplate from '@templates/PageTemplate'
const Home: NextPage = () => {
  return (
    <PageTemplate>
      <div className="m-5">
        <h1>Animes</h1>
        <br />
        {AnimesMock.map(anime => (
          <div key={anime.titulo} className={`mb-2`}>
            <Link
              href={`/animes/${anime.titulo
                .toLocaleLowerCase()
                .replace(/ /g, '-')}`}
            >
              <button>{anime.titulo}</button>
            </Link>
          </div>
        ))}
      </div>
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
