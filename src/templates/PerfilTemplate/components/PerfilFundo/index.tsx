import AuthService from '@services/user'
import * as imagem from '@shared/mocks/Imagens'
import { useRouter } from 'next/router'
import { perfilimgprops } from 'pages/perfil'
import { useState } from 'react'
import styles from './styles.module.css'

const PerfilFundo = (props: perfilimgprops) => {
  const router = useRouter()
  const [imgUser, setimg] = useState(props.user.img_fundo)
  const alterarImagem = async () => {
    try {
      await AuthService.atualizarImg(
        props.user.id,
        props.token,
        undefined,
        imgUser
      )
      router.reload()
    } catch (error) {}
  }
  return (
    <div className={styles.main}>
      <div onClick={() => props.setshow(false)} className={styles.main2}></div>
      <div className={styles.container2}>
        <img className={styles.img0} src={imgUser} alt="" />

        <div className={styles.container}>
          <div className={styles.container3}>
            <div>
              <h2 className={styles.h2}>Selecione uma imagem de fundo</h2>
              <p className={styles.p}>
                Selecione a imagem do seu anime favorito.
              </p>
            </div>
            <div>
              <button onClick={alterarImagem} className={styles.button}>
                Salvar
              </button>
              <button
                onClick={() => props.setshow(false)}
                className={styles.button}
              >
                Cancelar
              </button>
            </div>
          </div>
          <div className={styles.divcontainerimagens}>
            <ul className={styles.ul}>
              {imagem.Perfilfundo.map(img => (
                <li
                  className={styles.ali}
                  onClick={() => {
                    setimg(img)
                  }}
                  key={img}
                >
                  <img
                    className={`${styles.imagem} ${
                      imgUser == img && styles.imagemSelected
                    }`}
                    src={img}
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PerfilFundo
