import Alphabet from '../classes/Alphabet'
import AlphabetService from './AlphabetService'

class EnglishService {
  lang: string

  constructor() {
    this.lang = 'en'
  }

  getAlphabet() : Alphabet {
    return new AlphabetService().createFromLanguage(this.lang)
  }

  getWord() {
    const words = this.words()
    return 'ghost'
    return words[Math.floor(Math.random() * words.length)]
  }

  private words() {
    return [
      'hallo',
      'plant',
      'hatch',
      'scope',
      'world',
      'trees',
      'stars',
      'young',
      'frost',
      'shine',
      'crown',
      'apple',
      'scars',
      'maple',
      'error',
      'rails',
      'weird',
      'jumps',
      'tumor',
      'loyal',
      'maids',
      'runny',
      'heals',
      'lumps',
      'dumps',
      'wears',
      'style',
      'gears',
      'sweet',
      'salty',
      'beard',
      'swell',
      'sunny',
      'doors',
      'bunny',
      'float',
      'ghost',
      'seals',
      'frown',
      'stick',
      'brick',
      'lungs',
      'mouth',
      'heart',
      'demon',
      'angel',
      'trash',
      'belly',
      'swarm',
      'liver',
      'erase',
      'skull',
      'shark',
      'whale',
      'sport',
      'react',
      'total',
      'fears',
      'spade',
      'trial',
      'mills',
      'juice',
      'plane',
      'train',
      'bulls',
      'eagle',
      'llama',
      'ready',
      'party',
      'music',
      'drink',
      'drugs',
      'beats',
      'phone',
      'house',
      'weary',
      'bound',
      'muddy',
      'dummy',
      'shout',
      'dance',
      'radio',
      'store',
      'sandy',
      'peach',
      'beach',
      'ghost',
      'moist',
      'pants',
      'screw',
      'gates',
      'widow',
      'horse',
      'trams',
      'grave',
      'swine',
      'wells',
      'jeans'
    ]
  }
}

export default EnglishService;