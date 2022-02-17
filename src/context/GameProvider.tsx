import React, { useState } from 'react'
import Alphabet from '../classes/Alphabet'
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

  const [alphabet, setAlphabet] = useState<Alphabet>(service.getAlphabet());
  const [secretWord, setSecretWord] = useState(service.getWord());
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCell, setCurrentCell] = useState(0);
  const [lastCell, setLastCell] = useState(-1);
  const [lastKey, setLastKey] = useState('');

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
  );
}

export { GameProvider, GameContext };