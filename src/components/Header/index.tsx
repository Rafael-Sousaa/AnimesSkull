import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaBars
} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './styles.module.css'
import routes from 'shared/constants/routes'
import NavMenuItem from './NavMenuItem'
import { useState } from 'react'

const routesArray = Object.values(routes)

const Header = () => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)
  return (
    <nav className={styles.nav}>
      <div className="container ">
        <div className="row align-items-center">
          <div className="col col-xl-10">
            <button
              onClick={toggleMenu}
              className={`d-flex d-xl-none border-0 ${styles.menuButton}`}
            >
              <FaBars />
            </button>
            <div>
              <div
                onClick={toggleMenu}
                className={`d-xl-none ${
                  menu ? `${styles.spanMobile}` : 'd-none'
                }`}
              ></div>

              <ul
                className={`${
                  menu
                    ? `d-sm-flex flex-column flex-xl-row ${styles.animation}`
                    : `d-none`
                } d-xl-flex align-items-xl-center m-0 p-xl-0 ${styles.menu}`}
              >
                <div className={'d-flex d-xl-none justify-content-end'}>
                  <button
                    className={`d-xl-none ${
                      menu ? `d-flex align-items-end` : 'd-none'
                    }`}
                    onClick={toggleMenu}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
                {routesArray.map(route => (
                  <li key={route.title}>
                    <NavMenuItem {...route} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
