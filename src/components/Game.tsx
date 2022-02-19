import { GameContext } from '../context/GameProvider'
import Keyboard from './Keyboard'
import Row from './Row'
import { useContext } from 'react'

function Game(props: any) {
  const { secretWord } = useContext(GameContext)

  return secretWord !== '' ? (
    <div className="flex flex-col items-center">
      {
        Array.from(Array(parseInt(props.rows_number)).keys()).map((i: number) => {
          return <Row key={i} id={i} cellsNumber="5" />
        })
      }
      <Keyboard />
    </div>
  ) : null
}

export default Game;