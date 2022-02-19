import Alphabet from '../classes/Alphabet'
import Letter from '../classes/Letter'

class AlphabetFactory {
  config: any

  constructor() {
    this.config = require('../config/alphabets.json')
  }
  
  createFromLanguage(language: string) : Alphabet {
    const lang = this.config[language]
  
    if(!lang) return new Alphabet([[]])

    return new Alphabet(
      lang.letters.map((row: []) => {
        return row.map((letter: string) => {
          return new Letter(letter)
        })
      })
    )
  }
}

export default AlphabetFactory;