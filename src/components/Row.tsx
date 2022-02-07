import Cell from "./Cell";

function Row(props: any) {
  return (
    <div className="flex">
      {
        Array.from(Array(parseInt(props.cells_number)).keys()).map((i: number) => {
          return <Cell key={'cell-' + i} />
        })
      }
    </div>
  );
}
  
export default Row;