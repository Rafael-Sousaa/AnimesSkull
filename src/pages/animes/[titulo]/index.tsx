import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import AnimesMock from '@shared/mocks/Animes'
import { Anime } from '@shared/interfaces'
import AnimesTemplate from '@templates/AnimesTemplate'
import { checkIfIsLoggedIn } from '@shared/helpers/auth'

export interface AnimesPage {
  anime: Anime
}

const Animes = (props: AnimesPage) => {
  return <AnimesTemplate {...props.anime} />
}

interface PreventionParams extends ParsedUrlQuery {
  titulo: string
}

interface Params {
  params: {
    titulo: string
  }
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const loggedIn = await checkIfIsLoggedIn(context)
    if (!loggedIn.token) throw new Error('error')
    const params = context.params as PreventionParams

    const anime = AnimesMock.find(
      anime =>
        anime.titulo.toLocaleLowerCase() ===
        params.titulo.replace(/-/g, ' ').toLocaleLowerCase()
    )
    if (!anime) throw new Error('error')

    return {
      props: { anime }
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
export default Animes
