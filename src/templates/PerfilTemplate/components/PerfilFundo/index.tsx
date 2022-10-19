import * as imagem from '@shared/mocks/Imagens'
import styles from './styles.module.css'
const PerfilFundo = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.div12}>
          <ul className={styles.ul}>
            {imagem.Perfilfundo.map(img => (
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
export default PerfilFundo
