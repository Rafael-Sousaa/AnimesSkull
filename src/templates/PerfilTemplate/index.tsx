import { perfilprops } from 'pages/perfil'
import styles from './styles.module.css'

import { useState } from 'react'
import PerfilImagem from './components/PerfilImagem'
import PerfilFundo from './components/PerfilFundo'

const PerfilTemplate = (props: perfilprops) => {
  const [showPerfil, setshowPerfil] = useState(false)
  const [showPerfilfundo, setshowPerfilfundo] = useState(false)

  const mostrarperfil = () => {
    setshowPerfil(!showPerfil)
    if (!showPerfil) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
  const mostrarperfilfundo = () => {
    setshowPerfilfundo(!showPerfilfundo)
    if (!showPerfilfundo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <div className={styles.perfil}>
      <div className={styles.container}></div>
      <div className="subMenu"></div>
      <div className="walpaper"></div>
      <img
        onClick={mostrarperfilfundo}
        src={props.user.img_fundo}
        alt=""
        className={styles.bannerImagem}
      />
      <div className={styles.container}>
        <div
          className={styles.profilePic}
          onClick={mostrarperfil}
          style={{ backgroundImage: `url(${props.user.img_perfil})` }}
        ></div>
        <h2 className={styles.h2}>{props.user.name}</h2>
      </div>

      {showPerfil && (
        <div className={'d-none d-xl-block'}>
          <PerfilImagem
            {...props}
            setimg={setshowPerfil}
            setshow={setshowPerfil}
          />
        </div>
      )}
      {showPerfilfundo && (
        <div className={'d-none d-xl-block'}>
          <PerfilFundo
            {...props}
            setimg={setshowPerfilfundo}
            setshow={setshowPerfilfundo}
          />
        </div>
      )}
    </div>
  )
}

export default PerfilTemplate
