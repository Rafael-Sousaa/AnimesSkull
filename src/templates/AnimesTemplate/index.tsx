import { Anime } from '@shared/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ListaEp from './components/ListaEp'
import styles from './styles.module.css'
import { BsCircleFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import ListaTemp from './components/ListaTemp'

const AnimesTemplate = (props: Anime) => {
  const [episodios, setEpisodios] = useState(0)
  const [vez, setVez] = useState(0)

  return (
    <div className={styles.div666}>
      <div
        className={styles.div123}
        style={{ backgroundImage: `url(${props.imagem})` }}
      />
      <div className={styles.div}>
        <br />
        <br />

        <div
          className="d-flex flex-column flex-md-row mb-3"
          style={{
            opacity: '1',
            position: 'absolute',
            top: '115px',
            gap: '4rem',
            margin: '0 auto'
          }}
        >
          <div>
            <img
              className={styles.imgmobile}
              src={props.imagem}
              width={210}
              height={310}
              alt={props.titulo}
            />
          </div>
          <div>
            <h1>{props.titulo}</h1>
            <br />
            <div className={styles.h3}>
              <p className={styles.borda}>FULL HD</p>
              <p className={styles.borda}>Legendado</p>

              <i>
                <BsCircleFill size={4} />
              </i>

              <p>Episódios: {episodios.toString()}</p>
            </div>
            <div className={`d-flex gap-3 ${styles.btn}`}>
              <button
                style={{
                  padding: '9px 20px',
                  paddingBottom: '10px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#B01E1C'
                }}
              >
                <i
                  style={{
                    padding: '0',
                    marginTop: '-4px',
                    alignItems: 'center'
                  }}
                >
                  <FaPlay />
                </i>{' '}
                Assistir agora
              </button>
              <button
                style={{
                  padding: '9px 20px',
                  paddingBottom: '10px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                Favoritar
              </button>
            </div>
            <br />
            <div className={styles.divlinhassinpose}>
              <p>{props.sinopse}</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Temporada{props.temporadas.length > 1 && 's'}</h2>
          <div className={styles.temp}>
            {props.temporadas.map(temporada => {
              if (vez < props.temporadas.length) {
                setEpisodios(episodios + temporada.episodios.length)
                setVez(vez + 1)
              }
              return (
                <div key={temporada.temporada}>
                  <ListaTemp temp={1} temporada={temporada} />
                </div>
              )
            })}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={`gap-2 align-items-center`}>
          <p className={styles.desc}>GÊNEROS: </p>

          <div className={styles.desc2}>
            {props.generos.map((genero, index) => (
              <p key={genero.genero}>
                {genero.genero}
                {index + 1 < props.generos.length && ','}
              </p>
            ))}
          </div>
        </div>
        <div className={`d-flex gap-2 align-items-center`}>
          <p className={styles.desc}>Ano: </p>
          <p className={styles.desc2}>{props.ano}</p>
        </div>
        <div className={`d-flex gap-2 align-items-center`}>
          <p className={styles.desc}>TEMPORADAS: </p>
          <p className={styles.desc2}>{props.temporadas.length.toString()}</p>
        </div>
        <div className={`d-flex gap-2 align-items-center`}>
          <p className={styles.desc}>EPISÓDIOS: </p>
          <p className={styles.desc2}>{episodios.toString()}</p>
        </div>
      </div>
    </div>
  )
}

export default AnimesTemplate
