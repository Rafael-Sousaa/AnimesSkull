import { Anime } from '@shared/interfaces'
import * as Episodios from '../Episodios'

const Animes: Array<Anime> = [
  {
    titulo: 'Boku no Hero Academia',
    abreviacao: 'Boku no Hero',
    imagem: '/images/bokunohero.jpg',
    sinopse:
      'Por toda a sua vida, Izuku sonhou ser um herói — um objetivo ambicioso para qualquer um, mas especialmente desafiador para um garoto sem superpoderes. Isso mesmo: em um mundo onde 80% da população tem algum tipo de Dom especial, Izuku teve a má sorte de nascer completamente normal. Mas isso não vai impedi-lo de se matricular em uma das academias de herois mais prestigiosas do mundo.',
    ano: '2022',
    generos: [
      { genero: 'Ação' },
      { genero: 'Comédia' },
      { genero: 'Escolar' },
      { genero: 'Shounen' },
      { genero: 'Superpoder' }
    ],
    temporadas: [
      {
        temporada: 6,
        episodios: [
          {
            episodio: 1,
            imagem: '/images/bokunohero61.jpg',
            video: Episodios.BokunoHero6.ep1
          },
          {
            episodio: 2,
            imagem: '/images/bokunohero62.jpg',
            video: Episodios.BokunoHero6.ep2
          }
        ]
      }
    ]
  },
  {
    titulo: 'Mob Psycho 100',
    imagem: '/images/mobpsyco.jpg',
    sinopse:
      'Kageyama Shigeo, também conhecido como “Mob”, é um garoto que não leva muito jeito pra se expressar, mas que é um poderoso telepata. Decidido a levar uma vida normal, Mob suprime seus poderes extrassensoriais, mas quando suas emoções atingem um pico de 100%, algo terrível lhe acontece! Rodeado de falsos telepatas, espíritos do mal e misteriosas organizações, como Mob reagirá? Que decisões ele vai tomar?',
    ano: '2022',
    generos: [
      { genero: 'Comédia' },
      { genero: 'Overpower' },
      { genero: 'Sobrenatural' },
      { genero: 'Superpoder' }
    ],
    temporadas: [
      {
        temporada: 3,
        episodios: [
          {
            episodio: 1,
            imagem: '/images/mobpsyco31.jpg',
            video: Episodios.MobPsycho3.ep1
          },
          {
            episodio: 2,
            imagem: '/images/mobpsyco32.jpg',
            video: Episodios.MobPsycho3.ep2
          }
        ]
      }
    ]
  },
  {
    titulo: 'Chainsaw Man',
    imagem: '/images/chaisawman.jpg',
    sinopse:
      'Denji tem um sonho simples – viver uma vida feliz e pacífica, passando um tempo com uma garota de quem gosta. Isso está muito longe da realidade, no entanto, já que Denji é forçado pela yakuza a matar demônios para pagar suas dívidas esmagadoras. Usando seu demônio de estimação Pochita como arma, ele está pronto para fazer qualquer coisa por um pouco de dinheiro.',
    ano: '2022',
    generos: [
      { genero: 'Ação' },
      { genero: 'Aventura' },
      { genero: 'Sobrenatural' },
      { genero: 'Fantasia' },

      { genero: 'Shounen' }
    ],
    temporadas: [
      {
        temporada: 1,
        episodios: [
          {
            episodio: 1,
            imagem: '/images/chaisawman11.jpg',
            video: Episodios.ChainsawMan.ep1
          }
        ]
      }
    ]
  },

  {
    titulo: 'Blue Lock',
    imagem: '/images/bluelock.jpg',
    sinopse:
      'Após sofrer um vexame na Copa do Mundo de 2018, a seleção japonesa sofre para se recompor. Falta ao time um artilheiro, uma estrela capaz de guiá-los à vitória. Com o intuito de criar um atacante com fome de bola e sede de vitória, capaz de virar jogos tidos como impossíveis, a Confederação Japonesa de Futebol reune 300 dos melhores jogadores de base do país em um só lugar. Centenas de jovens vão se enfrentar numa batalha de músculos e de egos para provar que são os melhores',
    ano: '2022',
    generos: [
      { genero: 'Drama' },
      { genero: 'Esporte' },
      { genero: 'Slice of life' }
    ],
    temporadas: [
      {
        temporada: 1,
        episodios: [
          {
            episodio: 1,
            imagem: '/images/bluelock11.jpg',
            video: Episodios.BlueLock.ep1
          }
        ]
      }
    ]
  },
  {
    titulo: 'Tensei Shitara Slime Datta Ken Dublado',
    abreviacao: 'Slime',
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
            video: Episodios.Slime1.ep1,
            imagem: '/images/slime11.jpg'
          },
          {
            episodio: 2,
            video: Episodios.Slime1.ep2,
            imagem: '/images/slime12.jpg'
          },
          {
            episodio: 3,
            video: Episodios.Slime1.ep3,
            imagem: '/images/slime13.jpg'
          }
        ]
      },
      {
        temporada: 2,
        episodios: [
          {
            episodio: 1,
            video: Episodios.Slime2.ep1,
            imagem: '/images/slime21.jpg'
          },
          {
            episodio: 2,
            video: Episodios.Slime2.ep2,
            imagem: '/images/slime22.jpg'
          },
          {
            episodio: 3,
            video: Episodios.Slime2.ep3,
            imagem: '/images/slime23.jpg'
          }
        ]
      }
    ]
  },
  {
    titulo: 'Kuro no Shoukanshi (Black Summoner) Dublado',
    abreviacao: 'Black Summoner',
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
            video: Episodios.BlackSummoner.ep1,
            imagem: '/images/BlackSummoner11.jpg'
          },
          {
            episodio: 2,
            video: Episodios.BlackSummoner.ep2,
            imagem: '/images/BlackSummoner12.jpg'
          },
          {
            episodio: 3,
            video: Episodios.BlackSummoner.ep3,
            imagem: '/images/BlackSummoner13.jpg'
          }
        ]
      }
    ]
  },
  {
    titulo: 'Lycoris Recoil Dublado',
    abreviacao: 'Lycoris Recoil',
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
            video: Episodios.LycorisRecoil.ep1,
            imagem: '/images/LycorisRecoil11.jpg'
          },
          {
            episodio: 2,
            video: Episodios.LycorisRecoil.ep2,
            imagem: '/images/LycorisRecoil12.jpg'
          },
          {
            episodio: 3,
            video: Episodios.LycorisRecoil.ep3,
            imagem: '/images/LycorisRecoil13.jpg'
          }
        ]
      }
    ]
  }
]

export default Animes
