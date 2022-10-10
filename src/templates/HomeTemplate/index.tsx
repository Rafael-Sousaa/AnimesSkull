import AnimesMock from '@shared/mocks/Animes'
import Link from 'next/link'
import styles from './styles.module.css'
const HomeTemplate = () => {
  return (
    <>
      <div className={styles.div}>
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
      </div>
    </>
  )
}

export default HomeTemplate
