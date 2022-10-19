export interface Anime {
  abreviacao?: string
  titulo: string
  imagem: string
  sinopse: string
  ano: string
  generos: Array<Genero>
  temporadas: Array<Temporadas>
}

export interface Genero {
  genero: string
}

export interface Temporadas {
  temporada: number
  episodios: Array<Episodios>
}

export interface Episodios {
  episodio: number
  imagem: string
  video: string
}

export interface CarouselInterface {
  titulo: string
  sinopse: string
  link: string
  imagem: string
}
export interface User {
  id: number
  name: string
  email: string
  img_perfil: string
  img_fundo: string
}
