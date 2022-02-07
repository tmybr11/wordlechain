import './Cell.css';

function Cell(props: any) {
  return (
    <div className="cell text-center">{props.letter}</div>
  );
}

export default Cell;