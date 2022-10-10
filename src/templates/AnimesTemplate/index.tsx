import { Anime } from '@shared/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ListaEp from './components/ListaEp'
import styles from './styles.module.css'

const AnimesTemplate = (props: Anime) => {
  const [episodios, setEpisodios] = useState(0)
  const [vez, setVez] = useState(0)

  return (
    <div className={styles.div666}>
      <div className={styles.div}>
        <Link href={'/'}>
          <button>home</button>
        </Link>
        <br />
        <br />
        <div className="d-flex gap-3 mb-3">
          <div>
            <Image
              src={props.imagem}
              width={185}
              height={278}
              alt={props.titulo}
            />
          </div>
          <div>
            <h1>{props.titulo}</h1>
            <br />
            <div className={`gap-2 align-items-center`}>
              <p className={styles.desc}>GÊNEROS: </p>
              <br />
              <div className={styles.desc2}>
                {props.generos.map(genero => (
                  <div key={genero.genero}>
                    <p>{genero.genero}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`d-flex gap-2 align-items-center`}>
              <p className={styles.desc}>Ano: </p>
              <p className={styles.desc2}>{props.ano}</p>
            </div>
            <div className={`d-flex gap-2 align-items-center`}>
              <p className={styles.desc}>TEMPORADAS: </p>
              <p className={styles.desc2}>
                {props.temporadas.length.toString()}
              </p>
            </div>
            <div className={`d-flex gap-2 align-items-center`}>
              <p className={styles.desc}>EPISÓDIOS: </p>
              <p className={styles.desc2}>{episodios.toString()}</p>
            </div>
          </div>
        </div>
        <div>
          <h2>SINOPSE</h2>
          <p>{props.sinopse}</p>
        </div>
        <div>Episódios</div>
        {props.temporadas.map(temporada => {
          if (vez < props.temporadas.length) {
            setEpisodios(episodios + temporada.episodios.length)
            setVez(vez + 1)
          }
          return (
            <div key={temporada.temporada}>
              <ListaEp temporada={temporada} titulo={props.titulo} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AnimesTemplate
