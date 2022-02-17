class Letter {
  char: string
  status: number

  constructor(char: string) {
    this.char = char
    this.status = -1
  }

  unchecked() {
    return this.status === -1
  }

  notThere() {
    return this.status === 0
  }

  misplaced() {
    return this.status === 1
  }

  correct() {
    return this.status === 2
  }
}

export default Letter;