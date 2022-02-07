import Row from './Row'
import EnglishService from '../services/EnglishService'

function Game(props: any) {
  const service = new EnglishService()
  const secretWord = service.getWord()

  return (
    <div className="flex flex-col items-center">
      {
        Array.from(Array(parseInt(props.rows_number)).keys()).map((i: number) => {
          return <Row key={'row-' + i} cells_number="5" />
        })
      }
      <label>You won</label>
    </div>
  )
}

export default Game;