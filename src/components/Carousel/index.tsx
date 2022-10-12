import styles from './styles.module.css'
import Carousel from 'react-bootstrap/Carousel'

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
        <Carousel.Item className={styles.div}>
          <img
            src="/images/chaisawmancarousel.jpg"
            className="d-block w-100"
            alt=""
          />
          <Carousel.Caption>
            <h2>Denji</h2>
            <p>Serra Eletrica</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.div}>
          <img
            src="/images/ichigocarousel.jpg"
            className="d-block w-100"
            alt=""
          />

          <Carousel.Caption>
            <h3>Ichigo True Bankai</h3>
            <p>Bleach</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.div}>
          <img
            src="/images/onepiececarousel.jpg"
            className="d-block w-100"
            alt=""
          />

          <Carousel.Caption>
            <h3>Luffy</h3>
            <p>One Piece</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComponent
