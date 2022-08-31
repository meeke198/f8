import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
    console.log({ squares });
    console.log({ onClick });
 return (
  <div className="board">
    {squares.map((square, i) => (
          
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>)
};

export default Board;
