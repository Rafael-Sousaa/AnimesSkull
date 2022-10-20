import AuthService from '@services/user'
import * as imagem from '@shared/mocks/Imagens'
import { useRouter } from 'next/router'
import { perfilimgprops } from 'pages/perfil'
import { useState } from 'react'
import styles from './styles.module.css'

const PerfilImagem = (props: perfilimgprops) => {
  const router = useRouter()
  const [imgUser, setimg] = useState(props.user.img_perfil)
  const alterarImagem = async () => {
    try {
      await AuthService.atualizarImg(
        props.user.id,
        props.token,
        imgUser,
        undefined
      )
      router.reload()
    } catch (error) {}
  }
  return (
    <>
      <div className={styles.main}>
        <div
          onClick={() => props.setshow(false)}
          className={styles.main2}
        ></div>
        <div className={styles.container}>
          <img className={styles.img1} src={imgUser} alt="" />
          <div className={styles.div67}>
            <h2 className={styles.h2}>Escolha seu Avatar</h2>
            <p className={styles.p}>
              Selecione a imagem do seu personagem favorito.
            </p>
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
          <div className={styles.div22}>
            <ul className={styles.ul}>
              {imagem.Perfil.map(img => (
                <li onClick={() => setimg(img)} key={img}>
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
    </>
  )
}
export default PerfilImagem
