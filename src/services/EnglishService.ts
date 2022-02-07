class EnglishService {
  constructor() {
  }

  getWord() {
    const words = this.words()
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
      'trash'
    ]
  }
}

export default EnglishService;