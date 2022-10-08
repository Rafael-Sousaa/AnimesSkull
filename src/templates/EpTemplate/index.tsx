import { AnimePage } from 'pages/animes/[titulo]/[ep]'
import NextAnime from './components/NextAnime'
import styles from './styles.module.css'

const EpTemplate = (props: AnimePage) => {
  return (
    <div className={`${styles.div2} mt-5 pb-5`}>
      <div className={styles.div3}>
        <NextAnime
          titulo={props.titulo}
          ep={props.episodio.episodio}
          maxEps={props.maxEps}
          temp={props.temp}
        />
      </div>
      <div
        className={styles.div}
        dangerouslySetInnerHTML={{ __html: props.episodio.video }}
      />
      <br />
      <div className={styles.div3}>
        <h2>{`${props.titulo[0].toUpperCase()}${props.titulo
          .slice(1)
          .replace(/-/g, ' ')}`}</h2>
        <h2>
          Tempodara-{props.temp} / Episódio-{props.episodio.episodio}
        </h2>
      </div>
    </div>
  )
}

export default EpTemplate
