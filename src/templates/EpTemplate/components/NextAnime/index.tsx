import Link from 'next/link'
import styles from './styles.module.css'

interface NextAnimeProps {
  titulo: string
  ep: number
  maxEps: string
  temp: string
}
const NextAnime = (props: NextAnimeProps) => {
  return (
    <div className={`${styles.div2} d-flex justify-content-between`}>
      <div className={`${styles.div} ${props.ep === 1 && styles.disable}`}>
        <Link href={`/animes/${props.titulo}/${props.temp}-${props.ep - 1}`}>
          Anterior
        </Link>
      </div>
      <div className={styles.div}>
        <Link href={`/animes/${props.titulo}`}>Lista</Link>
      </div>
      <div
        className={`${styles.div} ${
          props.ep.toString() === props.maxEps && styles.disable
        }`}
      >
        <Link href={`/animes/${props.titulo}/${props.temp}-${props.ep + 1}`}>
          Proximo
        </Link>
      </div>
    </div>
  )
}

export default NextAnime
