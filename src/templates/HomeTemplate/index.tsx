import Carousel from '@components/Carousel'
import AnimesMock from '@shared/mocks/Animes'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
const HomeTemplate = () => {
  return (
    <>
      <div className="mt-3 mt-mb-4">
        <Carousel />
      </div>

      <div className={styles.div}>
        <div className="m-5">
          <h1>Animes</h1>
          <br />
          <div className={styles.divAnimes}>
            {AnimesMock.map(anime => (
              <div key={anime.titulo} className={`mb-2 ${styles.botao}`}>
                <Link
                  href={`/animes/${anime.titulo
                    .toLocaleLowerCase()
                    .replace(/ /g, '-')}`}
                >
                  <a>
                    <img
                      src={anime.imagem}
                      width={150}
                      height={247}
                      alt={anime.titulo}
                    />
                    <p>{anime.abreviacao || anime.titulo}</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTemplate
