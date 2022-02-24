import React, { useState } from 'react'
import Alphabet from '../classes/Alphabet'
import AlphabetFactory from '../services/AlphabetFactory'

const GameContext = React.createContext({
  alphabet: new Alphabet([[]]),
  currentRow: 0,
  currentCell: 0,
  lastCell: -1,
  lastKey: '',
  setAlphabet: (alphabet:any) => {},
  setCurrentRow: (currentRow:number) => {},
  setCurrentCell: (currentCell:number) => {},
  setLastCell: (lastCell:number) => {},
  setLastKey: (lastKey:string) => {}
});

function GameProvider(props: any) {
  const alphabetFactory = new AlphabetFactory()
  const [alphabet, setAlphabet] = useState<Alphabet>(alphabetFactory.createFromLanguage('en'));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCell, setCurrentCell] = useState(0);
  const [lastCell, setLastCell] = useState(-1);
  const [lastKey, setLastKey] = useState('');

  return (
    <GameContext.Provider value={
      {
        alphabet,
        currentRow, 
        currentCell, 
        lastCell, 
        lastKey, 
        setAlphabet,
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