import { perfilprops } from 'pages/perfil'
import styles from './styles.module.css'

import { useEffect, useState } from 'react'
import PerfilImagem from './components/PerfilImagem'
import PerfilFundo from './components/PerfilFundo'

const PerfilTemplate = (props: perfilprops) => {
  const [showPerfil, setshowPerfil] = useState(false)
  const [showPerfilfundo, setshowPerfilfundo] = useState(false)

  const mostrarperfil = () => setshowPerfil(!showPerfil)
  const mostrarperfilfundo = () => setshowPerfilfundo(!showPerfilfundo)

  useEffect(() => {
    if (showPerfil || showPerfilfundo) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [showPerfil, showPerfilfundo])

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
        <div className={styles.name}>
          <h2 className={styles.h2}>{props.user.name}</h2>
        </div>
      </div>

      {showPerfil && (
        <PerfilImagem
          {...props}
          setimg={setshowPerfil}
          setshow={setshowPerfil}
        />
      )}
      {showPerfilfundo && (
        <PerfilFundo
          {...props}
          setimg={setshowPerfilfundo}
          setshow={setshowPerfilfundo}
        />
      )}
    </div>
  )
}

export default PerfilTemplate
