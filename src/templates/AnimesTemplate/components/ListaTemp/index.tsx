import { Temporadas } from '@shared/interfaces'
import { useState } from 'react'
import styles from './styles.module.css'

interface ListaTempProps {
  temporada: Temporadas
  temp: number
}

const ListaTemp = (props: ListaTempProps) => {
  const [temp, setTemp] = useState(props.temporada.episodios[0].episodio)
  return (
    <div>
      <h2 className={`${styles.h2temporada}`}>
        {props.temporada.temporada}º Temporada
      </h2>
    </div>
  )
}

export default ListaTemp
