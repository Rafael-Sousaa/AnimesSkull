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
const routes: Array<NavMenuItemProps> = [
  {
    title: 'Animes',
    link: '#',
    hasSubMenus: true,
    subMenus: [
      { title: 'Filmes', link: '#' },
      { title: 'Dublado', link: '#' },
      { title: 'Episodios', link: '#' },
      { title: 'Populares', link: '#' }
    ]
  },
  {
    title: 'Gêneros',
    link: '#',
    hasSubMenus: true,
    subMenus: [
      { title: 'Comédia', link: '#' },
      { title: 'Ação', link: '#' },
      { title: 'Isekai', link: '#' }
    ]
  }
]

export default routes
