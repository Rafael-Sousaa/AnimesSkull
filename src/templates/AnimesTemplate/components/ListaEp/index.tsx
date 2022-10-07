import { Temporadas } from '@shared/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './styles.module.css'

interface ListaEpProps {
  titulo: string
  temporada: Temporadas
}
const ListaEp = (props: ListaEpProps) => {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(!show)
  return (
    <div className="mb-1">
      <div className={`${styles.div} `} onClick={toggleShow}>
        <label className={`${show && 'bg-danger'} ${styles.label1} `}>
          {props.temporada.temporada.toString()}
        </label>
        <label>Temporada {props.temporada.temporada.toString()}</label>
      </div>
      {show && (
        <ul>
          {props.temporada.episodios.map(episodios => (
            <li
              key={episodios.episodio.toString()}
              className={`d-flex p-1 pb-2 pt-2 align-items-center gap-2 ${styles.li}`}
            >
              <Image
                src={episodios.imagem}
                width={90}
                height={50}
                alt={episodios.episodio.toString()}
              />
              <div className={styles.label}>
                <label className="text-white">
                  {props.temporada.temporada.toString()} -{' '}
                  {episodios.episodio.toString()}
                </label>
              </div>
              <div>
                <Link
                  href={`/animes/${props.titulo
                    .toLocaleLowerCase()
                    .replace(
                      / /g,
                      '-'
                    )}/${props.temporada.temporada.toString()}-${episodios.episodio.toString()}`}
                >
                  <a>
                    {props.titulo} - Episódio {episodios.episodio.toString()}
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaEp
