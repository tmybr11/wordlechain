import Letter from './Letter'

class Alphabet {
  letters: Letter[][]

  constructor(letters: Letter[][]) {
    this.letters = letters
  }

  getLetters() : Letter[][] {
    return this.letters
  }

  updateLetter(letter: string, value: number) : void {
    this.letters = this.letters.map((row) => {
      return row.map((l) => {
        if(l.char.toUpperCase() === letter.toUpperCase() && l.status < value) l.status = value
        return l 
      })
    })
  }
}

export default Alphabet;