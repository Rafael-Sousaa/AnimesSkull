import Link from 'next/link'
import { AnimePage } from 'pages/animes/[titulo]/[ep]'
import NextAnime from './components/NextAnime'
import styles from './styles.module.css'

const EpTemplate = (props: AnimePage) => {
  return (
    <div className={`${styles.div2} mt-5`}>
      <Link href={'/'}>
        <button>home</button>
      </Link>
      <br />
      <br />
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
    </div>
  )
}

export default EpTemplate
