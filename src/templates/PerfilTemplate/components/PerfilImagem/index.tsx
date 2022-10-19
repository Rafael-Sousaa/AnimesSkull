import * as imagem from '@shared/mocks/Imagens'
import styles from './styles.module.css'
const PerfilImagem = () => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img1} src="/images/tower.png" alt="" />
        <h2 className={styles.h1}>Escolha seu Avatar</h2>
        <p className={styles.p}>
          Escolha seu personagem preferido!Você pode mudá-lo a qualquer momento.
        </p>
        <div className={styles.div22}>
          <ul className={styles.ul}>
            {imagem.Perfil.map(img => (
              <li key={img}>
                <img className={styles.imagem} src={img} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
export default PerfilImagem
