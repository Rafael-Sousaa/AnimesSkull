import Header from '@components/Header'
import { perfilprops } from 'pages/perfil'
import styles from './styles.module.css'

import { useState } from 'react'
import PerfilImagem from './components/PerfilImagem'
import PerfilFundo from './components/PerfilFundo'
const PerfilTemplate = (props: perfilprops) => {
  const [showPerfil, setshowPerfil] = useState(false)
  const [showPerfilfundo, setshowPerfilfundo] = useState(false)

  const mostrarperfil = () => setshowPerfil(!showPerfil)
  const mostrarperfilfundo = () => setshowPerfilfundo(!showPerfilfundo)

  return (
    <>
      <div className={styles.container}></div>
      <div className="subMenu"></div>
      <div className="walpaper"></div>
      <img
        onClick={mostrarperfilfundo}
        src="/images/samuraiperfilfundo.png"
        alt=""
        className={styles.bannerImagem}
      />
      <div className={styles.container}>
        <div className={styles.profilePic} onClick={mostrarperfil}></div>
        <h2 className={styles.h2}>{props.user.name}</h2>
      </div>

      {showPerfil && <PerfilImagem />}
      {showPerfilfundo && <PerfilFundo />}
    </>
  )
}

export default PerfilTemplate
