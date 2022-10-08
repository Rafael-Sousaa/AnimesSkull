import Link from 'next/link'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
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

const NavMenuItem = (props: NavMenuItemProps) => {
  const router = useRouter()
  const [showSubMenus, setShowSubMenus] = useState(false)

  const toggleShowSubMenus = () => setShowSubMenus(!showSubMenus)

  return (
    <div className={`d-flex flex-column ${styles.list}`}>
      {props.hasSubMenus ? (
        <>
          <div>
            <label onClick={toggleShowSubMenus}>
              {props.title}
              {props.hasSubMenus && showSubMenus ? (
                <IoMdArrowDropup />
              ) : (
                <IoMdArrowDropdown />
              )}
            </label>
          </div>
          <div className={`${showSubMenus ? `` : 'd-none'}`}>
            <ul className={`${styles.menu}`}>
              {props.subMenus?.map(route => (
                <li key={route.title}>
                  <Link href={route.link}>
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
        </>
      ) : (
        <div>
          <Link href={props.link}>
            <label>{props.title}</label>
          </Link>
        </div>
      )}
    </div>
  )
}

export default NavMenuItem
