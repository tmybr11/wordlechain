import Cell from "./Cell";
import { useContext, useState, useEffect } from 'react';
import { GameContext } from '../context/GameProvider';
import ValidationService from '../services/ValidationService'

function Row({ id, cellsNumber }: any) {
  cellsNumber = parseInt(cellsNumber)
  const [word, setWord] = useState('');
  const [finished, setFinished] = useState(false);
  const [validation, setValidation] = useState<(boolean|null)[]>(Array.from(Array(cellsNumber).keys()).map((i: number) => {
    return null
  }));
  
  const [letters] = useState<string[]>(Array.from(Array(cellsNumber).keys()).map((i: number) => {
    return ''
  }));

  const { 
    currentCell, 
    currentRow, 
    lastKey, 
    alphabet,
    setLastKey, 
    setCurrentCell, 
    lastCell, 
    setLastCell, 
    setCurrentRow, 
    setAlphabet
  } = useContext(GameContext)

  const onChange = (letter: string) => {
    if(letter !== 'Delete') setWord(word + letter)
    else setWord(word.slice(0, -1))
  }

  useEffect(() => {
    const isCurrentRow = currentRow === id
    const sendKey = lastKey === 'Send'
    const deleteKey = lastKey === 'Delete'
    const rowFull = currentCell === cellsNumber

    if(isCurrentRow && lastKey !== '') {
      if(!rowFull && !deleteKey && !sendKey) {
        setLastCell(currentCell)
        letters[currentCell] = lastKey
        setCurrentCell(currentCell + 1)
      } else if(deleteKey) {
        if(lastCell - 1 >= -1) {
          setLastCell(lastCell - 1)
        }
        if(currentCell - 1 >= 0) {
          letters[currentCell - 1] = ''
          setCurrentCell(currentCell - 1)
        }
      } else if(sendKey) {
        if(letters.filter((l) => { return l !== '' }).length < 5) return
        new ValidationService().valid(letters.join('')).then((validation: any) => {
          validation = validation.data
          letters.forEach((letter, ix) => {
            let status = -1
  
            if(validation[ix] === true) status = 2
            else if(validation[ix] === false) status = 1
            else if(typeof validation[ix] === 'undefined' || validation[ix] === null) status = 0
  
            alphabet.updateLetter(letter, status)
          })

          setFinished(true)
          setCurrentRow(currentRow + 1)
          setCurrentCell(0)
          setLastCell(-1)
          setAlphabet(alphabet)
          setValidation(validation)
        })
      }
      
      setLastKey('')
    }
  },[lastKey])

  return (
    <div className="flex">
      {
        Array.from(Array(cellsNumber).keys()).map((i: number) => {
          return <Cell key={i} id={i} letter={letters[i]} onChange={onChange} finished={finished} rowId={id} valid={validation[i]} />
        })
      }
    </div>
  );
}
  
export default Row;