import bolcomCover from './assets/bolcomCover.jpg'
import kempenCover from './assets/kempenCover.jpg'
import philipsCover from './assets/philipsCover.png'
import gemeentemuseumCover from './assets/gemeentemuseumCover.png'
import florensisCover from './assets/florensisCover.png'
import belightingCover from './assets/belightingCover.png'
import uiCover from './assets/uiCover.png'
import florensisdragonCover from './assets/florensisdragonCover.png'
import chocomelCover from './assets/chocomelCover.png'
import jblCover from './assets/jblCover.png'
import zolandoCover from './assets/zolandoCover.png'
import bibliotheekCover from './assets/bibliotheekCover.png'
import libertyglobalCover from './assets/libertyglobalCover.png'
import arlaCover from './assets/arlaCover.png'

let content = [
  {
    brand: 'BOL.COM',
    title: 'A Summer island in the Netherlands',
    coverUrl: bolcomCover,
    type: 'client'
  },
  {
    brand: 'KEMPEN',
    title: 'Not some average banking website',
    coverUrl: kempenCover,
    type: 'client'
  },
  {
    brand: 'PHILIPS',
    title: 'Beautiful design meets innovative technology',
    coverUrl: philipsCover,
    type: 'client'
  },
  {
    brand: 'GEMEENTEMUSEUM',
    title: 'A 100 years of Mondriaan & De Stijl',
    coverUrl: gemeentemuseumCover,
    type: 'client'
  },
  {
    brand: 'FLORENSIS',
    title: 'Rethinking the entire online ecosystem',
    coverUrl: florensisCover,
    type: 'client'
  },
  {
    type: 'note',
    clients: [
      {
        brand: 'MICROSOFT',
        quote:
          'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels'
      },
      {
        brand: 'O’NEILL',
        quote:
          'Integrating existing content into O’Neills’s new e-commerce platform'
      }
    ]
  },

  {
    brand: 'BE LIGHTNING',
    title: 'Delivering clarity on a global scale',
    coverUrl: belightingCover,
    type: 'client'
  },
  {
    brand: 'UI',
    title: 'Swipe to find your next holiday destination',
    coverUrl: uiCover,
    type: 'client'
  },
  {
    brand: 'FLORENSIS',
    title: 'Rethinking the entire online ecosystem',
    coverUrl: florensisdragonCover,
    type: 'client'
  },
  {
    type: 'note',
    clients: [
      {
        brand: 'MICROSOFT',
        quote:
          'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels'
      },
      {
        brand: 'O’NEILL',
        quote:
          'Integrating existing content into O’Neills’s new e-commerce platform'
      }
    ]
  },

  {
    brand: 'CHOCOMEL',
    title: 'A campaign for the limited edition letter packs',
    coverUrl: chocomelCover,
    type: 'client'
  },
  {
    brand: 'JBL',
    title: 'Live like a champion with Jerome Boateng',
    coverUrl: jblCover,
    type: 'client'
  },
  {
    brand: 'ZOLANDO',
    title:
      'Live like a champion with Jerome BoatengInnovative SEO and content strategy for Zalando',
    coverUrl: zolandoCover,
    type: 'client'
  },
  {
    brand: 'KONINKLIJKE BIBLIOTHEEK',
    title: 'The search of the most influential book ever',
    coverUrl: bibliotheekCover,
    type: 'client'
  },
  {
    type: 'quote',
    clientquote: {
      quote:
        '“Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online bookings in just one month”',
      name: 'MATTIJS TEN DRINK - CEO, TRANSAVIA'
    }
  },
  {
    brand: 'LIBERTY GLOBAL',
    title: 'Delivering complex commerce solutions',
    coverUrl: libertyglobalCover,
    type: 'client'
  },
  {
    brand: 'ARLA',
    title: 'Swipe to find your next holiday destination',
    coverUrl: arlaCover,
    type: 'client'
  }
]

export default content
