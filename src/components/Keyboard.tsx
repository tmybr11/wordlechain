import Key from './Key'
import './Key.css'
import { useContext, useEffect } from 'react'
import { GameContext } from '../context/GameProvider'

function Keyboard() {
  const { setLastKey, alphabet } = useContext(GameContext)

  const onAction = (e: any) => {
    setLastKey(e.target.innerHTML)
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    const key = e.key || e.keyCode

    if(typeof key === 'number') {
      if(key >= 97 && key <= 122) {
        setLastKey(String.fromCharCode(key).toUpperCase())
      } else if(key === 13) {
        setLastKey('Send')
      } else if(key === 8) {
        setLastKey('Delete')
      }
    } else if(typeof key === 'string') {
      if(key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122) {
        setLastKey(key.toUpperCase())
      } else if(key === 'Enter') {
        setLastKey('Send')
      } else if(key === 'Backspace') {
        setLastKey('Delete')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {
        alphabet.getLetters().map((row, ix) => {
          return (
            <div key={ix} className="flex justify-center">
              {
                row.map(letter => (
                  <Key key={letter.char.toUpperCase()} letter={letter} onAction={onAction} size={'sm'} />
                ))
              }
            </div>
          )
        })
      }
      <div className="flex justify-center">
        <Key text="Send" onAction={onAction} size={'lg'} />
      </div>
    </div>
  )
}

export default Keyboard;