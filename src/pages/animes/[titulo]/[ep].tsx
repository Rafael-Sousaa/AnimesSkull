import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import AnimesMock from '@shared/mocks/Animes'
import { Episodios } from '@shared/interfaces'
import EpTemplate from '@templates/EpTemplate'
import { checkIfIsLoggedIn } from '@shared/helpers/auth'
import PageTemplate from '@templates/PageTemplate'

export interface AnimePage {
  episodio: Episodios
  temp: string
  maxEps: string
  titulo: string
}

const Ep = (props: AnimePage) => {
  return (
    <PageTemplate>
      <EpTemplate {...props} />
    </PageTemplate>
  )
}

interface PreventionParams extends ParsedUrlQuery {
  titulo: string
  ep: string
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const loggedIn = await checkIfIsLoggedIn(context)
    if (!loggedIn.token) throw new Error('error')

    const params = context.params as PreventionParams
    try {
      const [temp, ep] = params.ep.split('-')
      const anime = AnimesMock.find(
        anime =>
          anime.titulo.toLocaleLowerCase() ===
          params.titulo.replace(/-/g, ' ').toLocaleLowerCase()
      )
      if (!anime) throw new Error('Error')

      const temporadas = anime.temporadas.find(
        temporadas => temporadas.temporada.toString() === temp
      )
      if (!temporadas) throw new Error('Error')
      const maxEps = temporadas.episodios.length
      const episodio = temporadas.episodios.find(
        episodio => episodio.episodio.toString() === ep
      )
      return {
        props: {
          episodio: episodio,
          temp: temp,
          maxEps: maxEps.toString(),
          titulo: params.titulo
        }
      }
    } catch (error) {
      return {
        redirect: {
          destination: `/animes/${params.titulo}`,
          permanent: false
        }
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
export default Ep
