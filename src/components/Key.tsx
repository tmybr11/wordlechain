import Letter from '../classes/Letter'

function Key({onAction, letter, text, size}: any) {
  let status = ''

  if(letter) {
    if(letter.status === 2) {
      status = 'valid-green'
    } else if(letter.status === 1) {
      status = 'valid-yellow'
    } else if(letter.status === 0) {
      status = 'finished'
    }
  }

  const content = letter ? letter.char.toUpperCase() : text

  return (
    <button className={'key ' + size + ' ' + status} onClick={(e) => onAction(e) } >{content}</button>
  )
}

export default Key;