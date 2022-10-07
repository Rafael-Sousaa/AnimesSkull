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
    link: '/animes',
    hasSubMenus: true,
    subMenus: [
      { title: 'Filmes', link: '/animes/comedia' },
      { title: 'Dublado', link: 'animes/isekai' },
      { title: 'Episodios', link: 'animes/isekai' },
      { title: 'Populares', link: '/animes/acao' }
    ]
  },
  {
    title: 'Gêneros',
    link: '/genero',
    hasSubMenus: true,
    subMenus: [
      { title: 'Comédia', link: '/genero/comedia' },
      { title: 'Ação', link: '/genero/acao' },
      { title: 'Isekai', link: 'genero/isekai' }
    ]
  }
]

export default routes
