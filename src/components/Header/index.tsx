import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './styles.module.css'
import SearchForm from './components/SearchForm'
import routes from '@shared/constants/routes'
import NavMenuItem from './components/NavMenuItem'
import NavMenuItem2 from './components/NavMenuItem2'

const routesArray = Object.values(routes)

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false)
  const [showSearch, setShowSearch] = React.useState(false)

  const toggleShowMenu = () => {
    setShowSearch(false)
    setShowMenu(!showMenu)
  }

  const toggleShowSearch = () => setShowSearch(!showSearch)

  return (
    <header className={styles.header}>
      <div className="container">
        <div
          className={`d-block d-xl-none ${
            showSearch ? `${styles.divSearch}` : `${styles.noSearch}`
          }`}
        >
          <SearchForm />
        </div>

        <div
          className={`${
            showMenu ? `d-block d-xl-none ${styles.divMenuContent}` : ``
          }`}
        >
          <span
            onClick={toggleShowMenu}
            className={`${
              showMenu ? `${styles.divBlock2}` : `${styles.closeMenu2}`
            }`}
          ></span>
          <ul
            className={`${
              showMenu
                ? `d-flex flex-column ${styles.menu}`
                : `${styles.closeMenu}`
            }`}
          >
            <div>
              <button
                aria-label={'Fechar menu'}
                onClick={toggleShowMenu}
                className={`align-items-end mb-3 ${styles.btnX}`}
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

        <div className={styles.navmenu}>
          <div className={`${styles.navContainer}`}>
            <div style={{ gridArea: 'search' }}>
              <button
                aria-label={'Abrir caixa de pesquisa'}
                className={`${styles.navBtnLupa} d-block d-xl-none`}
                onClick={toggleShowSearch}
              >
                {!showSearch ? <FiSearch /> : <AiOutlineClose />}
              </button>
              <div className={`d-none d-xl-block`}>
                <SearchForm />
              </div>
            </div>
            <div style={{ gridArea: 'logo' }}>
              <Link href="/">
                <Image
                  src="/images/gojo.png"
                  width={50}
                  height={50}
                  alt="Gojo Logo"
                />
              </Link>
            </div>
            <div style={{ gridArea: 'menu' }}>
              <button
                aria-label={'Abrir menu'}
                className={`${styles.navBtnMenu} d-block d-xl-none`}
                onClick={toggleShowMenu}
              >
                <FaBars />
              </button>
              <nav className={`${styles.nav} d-none d-xl-block`}>
                <div className="container ">
                  <div className="row align-items-center">
                    <div className="col col-xl-10">
                      <ul
                        className={`d-xl-flex align-items-xl-center m-0 p-xl-0 ${styles.menu2}`}
                      >
                        <div className={'d-flex d-xl-none justify-content-end'}>
                          <button
                            className={`d-xl-none ${
                              showMenu ? `d-flex align-items-end` : 'd-none'
                            }`}
                            onClick={toggleShowMenu}
                          >
                            <AiOutlineClose />
                          </button>
                        </div>
                        {routesArray.map(route => (
                          <li key={route.title}>
                            <NavMenuItem2 {...route} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
