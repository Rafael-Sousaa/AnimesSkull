export interface Anime {
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
