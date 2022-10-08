import Link from 'next/link'
import { IoMdArrowDropdown } from 'react-icons/io'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface NavMenuItemProps {
  title: string
  link: string
  hasSubMenus: boolean
  subMenus?: Array<subMenus>
}
interface subMenus {
  title: string
  link: string
}

const NavMenuItem2 = (props: NavMenuItemProps) => {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)

  return (
    <>
      <div className={`d-flex flex-column ${styles.link}`}>
        {props.hasSubMenus ? (
          <a onClick={toggleMenu}>
            <label
              className={`d-flex m-3 mt-0 gap-2 m-xl-0 gap-xl-0 mb-0 align-items-center `}
            >
              {props.title}
              {props.hasSubMenus && <IoMdArrowDropdown />}
            </label>
          </a>
        ) : (
          <Link href={props.link}>
            <label
              className={`d-flex m-3 mt-0 mb-0 m-xl-0 align-items-center `}
            >
              {props.title}
            </label>
          </Link>
        )}

        {props.hasSubMenus && (
          <div className={`${styles.menuDiv}${menu ? `m-0 d-xl-none` : ''}`}>
            <i className={`${styles.tri}`}></i>
            <ul className={`${styles.menu} `}>
              {props.subMenus?.map(route => (
                <li key={route.title}>
                  <Link href={route.link} passHref>
                    <a
                      className={
                        router.asPath === route.link ? styles.active : ''
                      }
                    >
                      {route.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default NavMenuItem2

/*

 {routesArray.map(route => (
                  <li key={route.title}>
                    <NavMenuItem {...route} />
                  </li>
                ))}
*/
