import { Anime } from '@shared/interfaces'
import * as Episodeos from '../Episodios'

const Animes: Array<Anime> = [
  {
    titulo: 'Tensei Shitara Slime Datta Ken Dublado',
    imagem: '/images/slime.jpg',
    sinopse:
      'Vivendo sozinho e sem nunca ter uma namorada, Satoru Mikami, de 37 anos, está insatisfeito como onde sua vida chegou. Mas depois de morrer nas mãos de um ladrão, ele desperta para um novo começo em um novo mundo… como um slime.',
    ano: '2018',
    generos: [
      { genero: 'Ação' },
      { genero: 'Aventura' },
      { genero: 'Dublados' },
      { genero: 'Fantasia' },
      { genero: 'Isekai' },
      { genero: 'Magia' },
      { genero: 'Overpower' },
      { genero: 'Shounen' }
    ],
    temporadas: [
      {
        temporada: 1,
        episodios: [
          {
            episodio: 1,
            video: Episodeos.Slime1.ep1,
            imagem: '/images/slime11.jpg'
          },
          {
            episodio: 2,
            video: Episodeos.Slime1.ep2,
            imagem: '/images/slime12.jpg'
          },
          {
            episodio: 3,
            video: Episodeos.Slime1.ep3,
            imagem: '/images/slime13.jpg'
          }
        ]
      },
      {
        temporada: 2,
        episodios: [
          {
            episodio: 1,
            video: Episodeos.Slime2.ep1,
            imagem: '/images/slime21.jpg'
          },
          {
            episodio: 2,
            video: Episodeos.Slime2.ep2,
            imagem: '/images/slime22.jpg'
          },
          {
            episodio: 3,
            video: Episodeos.Slime2.ep3,
            imagem: '/images/slime23.jpg'
          }
        ]
      }
    ]
  },
  {
    titulo: 'Kuro no Shoukanshi (Black Summoner) Dublado',
    imagem: '/images/BlackSummoner.jpg',
    sinopse:
      'Após acordar em um novo mundo, Kelvin descobre que trocou suas memórias por um poder inimaginável. Sem se lembrar de muita coisa, o jovem logo descobre que é viciado em batalhas e que fará de tudo para participar delas. Agora vivendo como um “invocador/Summoner”, Kelvin se desafiará em várias lutas, contando com a ajuda da Deusa – e 1º companheira – que o trouxe para esse mundo cheio de inimigos e aliados fortes.',
    ano: '2022',
    generos: [
      { genero: 'Ação' },
      { genero: 'Aventura' },
      { genero: 'Dublados' },
      { genero: 'Fantasia' },
      { genero: 'Isekai' }
    ],
    temporadas: [
      {
        temporada: 1,
        episodios: [
          {
            episodio: 1,
            video: Episodeos.BlackSummoner.ep1,
            imagem: '/images/BlackSummoner11.jpg'
          },
          {
            episodio: 2,
            video: Episodeos.BlackSummoner.ep2,
            imagem: '/images/BlackSummoner12.jpg'
          },
          {
            episodio: 3,
            video: Episodeos.BlackSummoner.ep3,
            imagem: '/images/BlackSummoner13.jpg'
          }
        ]
      }
    ]
  },
  {
    titulo: 'Lycoris Recoil Dublado',
    imagem: '/images/LycorisRecoil.jpg',
    sinopse:
      'A história se passa no café Lyco-Reco, um lugar aconchegante onde deliciosas comidas são servidas e os clientes podem pedir o que quiserem, seja conselhos amorosos, lições comerciais ou até mesmo teorias de conspiração sobre zumbis e monstros gigantes.',
    ano: '2022',
    generos: [
      { genero: 'Comédia' },
      { genero: 'Slice of Life' },
      { genero: 'Dublados' }
    ],
    temporadas: [
      {
        temporada: 1,
        episodios: [
          {
            episodio: 1,
            video: Episodeos.LycorisRecoil.ep1,
            imagem: '/images/LycorisRecoil11.jpg'
          },
          {
            episodio: 2,
            video: Episodeos.LycorisRecoil.ep2,
            imagem: '/images/LycorisRecoil12.jpg'
          },
          {
            episodio: 3,
            video: Episodeos.LycorisRecoil.ep3,
            imagem: '/images/LycorisRecoil13.jpg'
          }
        ]
      }
    ]
  }
]

export default Animes
