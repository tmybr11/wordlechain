import { threadId } from "worker_threads"

class Validator {
  word: string[]
  secret: string[]

  constructor(word: string[], secret: string[]) {
    this.word = word.map((letter) => {
      return letter.toUpperCase()
    })
    this.secret = secret.map((letter) => {
      return letter.toUpperCase()
    })
  }

  validate() {
    const occurences:any = {}
    const validation:(boolean|null)[] = []
    this.word.forEach((letter, ix) => {
      letter = letter.toUpperCase()
      occurences[letter] = typeof occurences[letter] === 'undefined' ? 1 : occurences[letter] + 1

      if(letter === this.secret[ix]) { //Letter is in the right position
        validation[ix] = true
      } else if(this.secret.indexOf(letter) !== -1) {
        if(this.letterCorrectTimes(letter) < this.occurencesOfLetter(letter)) {
          validation[ix] = false
        }
      }
    })
    return validation
  }

  private occurencesOfLetter(letter: string) {
    let count = 0
    this.secret.forEach((l) => {
      if(l === letter) count++
    })
    return count
  }

  private letterCorrectTimes(letter: string) {
    let count = 0
    this.secret.forEach((l, ix) => {
      if(l === this.word[ix] && l === letter) count++
    })
    return count
  }
}

export default Validator;