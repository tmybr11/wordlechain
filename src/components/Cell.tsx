import './Cell.css';

function Cell({ letter, finished, valid }: any) {
  let validClass = ''

  if(finished && valid === true) {
    validClass = 'valid-green'
  } else if(finished && valid === false) {
    validClass = 'valid-yellow'
  }

  let finishedClass = ''

  if(finished && (typeof valid === 'undefined' || valid === null)) {
    finishedClass = 'finished'
  }

  return (
    <div className={'cell text-center ' + validClass + ' ' + finishedClass}>{letter}</div>
  );
}

export default Cell;