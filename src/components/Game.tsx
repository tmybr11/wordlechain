import Keyboard from './Keyboard'
import Row from './Row'

function Game(props: any) {
  return (
    <div className="flex flex-col items-center">
      {
        Array.from(Array(parseInt(props.rows_number)).keys()).map((i: number) => {
          return <Row key={i} id={i} cellsNumber="5" />
        })
      }
      <Keyboard />
    </div>
  )
}

export default Game;