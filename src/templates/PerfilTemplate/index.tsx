import { perfilprops } from 'pages/perfil'
import styles from './styles.module.css'

import { useEffect, useState } from 'react'
import PerfilImagem from './components/PerfilImagem'
import PerfilFundo from './components/PerfilFundo'
import Formulario from './components/Formulario'

const PerfilTemplate = (props: perfilprops) => {
  const [showPerfil, setshowPerfil] = useState(false)
  const [showPerfilfundo, setshowPerfilfundo] = useState(false)
  const [showDados, setshowDados] = useState(true)

  const mostrarperfil = () => setshowPerfil(!showPerfil)
  const mostrarperfilfundo = () => setshowPerfilfundo(!showPerfilfundo)
  const mostrarDados = () => {
    setshowDados(true)
  }

  const mostrarFormulario = () => {
    setshowDados(false)
  }

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

      <img
        onClick={mostrarperfilfundo}
        src={props.user.img_fundo}
        alt=""
        className={styles.bannerImagem}
      />
      <div className={styles.container}>
        <div className={styles.profilePic} onClick={mostrarperfil}>
          <img src={props.user.img_perfil} alt="" />
        </div>
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
      <div className={styles.containerDados}>
        <div className={styles.list}>
          <h1 className={styles.conf}>Geral</h1>
          <ul className={styles.alteracao}>
            <button className={styles.btn}>
              <li onClick={mostrarDados}>Ver Perfil</li>
            </button>
            <br></br>
            <button className={styles.btn}>
              <li onClick={mostrarFormulario}>Alterar Dados</li>
            </button>
          </ul>
        </div>
        <div>
          {showDados ? (
            <>
              <div className={styles.userdados}>
                <h1>PERFIL</h1>
                <br />
                <h3>Nome: {props.user.name}</h3>

                <h3>E-mail: {props.user.email}</h3>
                <br />
              </div>
              <br />
            </>
          ) : (
            <div className={styles.userdados2}>
              <Formulario user={props.user} token={props.token} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PerfilTemplate
