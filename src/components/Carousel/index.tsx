import styles from './styles.module.css'
import Carousel from 'react-bootstrap/Carousel'
import CarouselMock from '@shared/mocks/CarouselMock'
import Link from 'next/link'
import { AiFillPlayCircle } from 'react-icons/ai'
const CarouselComponent = () => {
  return (
    <div className={styles.div}>
      <Carousel
        indicators={false}
        prevIcon={
          <span
            aria-hidden="true"
            className={`carousel-control-prev-icon ${styles.icone}`}
          />
        }
        nextIcon={
          <span
            aria-hidden="true"
            className={`carousel-control-next-icon ${styles.icone}`}
          />
        }
      >
        {CarouselMock.map(carousel => (
          <Carousel.Item className={styles.div} key={carousel.titulo}>
            <img src={carousel.imagem} className="d-block w-100" alt="" />

            <Carousel.Caption>
              <div className={styles.div2}>
                <h2>{carousel.titulo}</h2>
                <p>{carousel.sinopse}</p>
              </div>
              <Link href={carousel.link}>
                <button className={styles.button}>
                  <AiFillPlayCircle /> Assistir agora
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselComponent
