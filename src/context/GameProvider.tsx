import React, { useEffect, useState } from 'react'
import Alphabet from '../classes/Alphabet'
import AlphabetFactory from '../services/AlphabetFactory'
import EnglishService from '../services/EnglishService'

const GameContext = React.createContext({
  alphabet: new Alphabet([[]]),
  secretWord: '',
  currentRow: 0,
  currentCell: 0,
  lastCell: -1,
  lastKey: '',
  setAlphabet: (alphabet:any) => {},
  setSecretWord: (secretWord:string) => {},
  setCurrentRow: (currentRow:number) => {},
  setCurrentCell: (currentCell:number) => {},
  setLastCell: (lastCell:number) => {},
  setLastKey: (lastKey:string) => {}
});

function GameProvider(props: any) {
  const service = new EnglishService()
  const alphabetFactory = new AlphabetFactory()
  const [alphabet, setAlphabet] = useState<Alphabet>(alphabetFactory.createFromLanguage('en'));
  const [secretWord, setSecretWord] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCell, setCurrentCell] = useState(0);
  const [lastCell, setLastCell] = useState(-1);
  const [lastKey, setLastKey] = useState('');

  useEffect(() => {
    service.random().then((randomWord) => {
      setSecretWord(randomWord['data']['word'])
    })
  }, [])

  return (
    <GameContext.Provider value={
      {
        alphabet,
        secretWord, 
        currentRow, 
        currentCell, 
        lastCell, 
        lastKey, 
        setAlphabet,
        setSecretWord, 
        setCurrentRow, 
        setCurrentCell,
        setLastCell,
        setLastKey
      }
    }>
      {props.children}
    </GameContext.Provider>
  )
}

export { GameProvider, GameContext };