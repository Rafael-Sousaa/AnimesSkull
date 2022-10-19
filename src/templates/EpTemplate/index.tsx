import { AnimePage } from 'pages/animes/[titulo]/[ep]'
import NextAnime from './components/NextAnime'
import styles from './styles.module.css'

const EpTemplate = (props: AnimePage) => {
  return (
    <>
      <div className={styles.div1} />
      <div className={`${styles.div2}`}>
        <div className={styles.div3}>
          <NextAnime
            titulo={props.titulo}
            ep={props.episodio.episodio}
            maxEps={props.maxEps}
            temp={props.temp}
          />
        </div>
        <div className={styles.div}>
          <video
            src={props.episodio.video}
            preload="metadata"
            style={{ objectFit: 'fill' }}
            controls
          ></video>
        </div>
        <br />
        <div className={styles.div4}>
          <div className={styles.div5}>
            <h2>{`${props.titulo[0].toUpperCase()}${props.titulo
              .slice(1)
              .replace(/-/g, ' ')}`}</h2>
            <h2>
              Tempodara-{props.temp} - Episódio-{props.episodio.episodio}
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default EpTemplate
