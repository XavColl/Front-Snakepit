import Row from "./Row"

/* eslint-disable react/prop-types */ 

export default function Board({game, place, position, turn, tp}) {

   const board = game.board
    

  return (
    <div className="Board">
        {board.map((row, i) => {
            return <Row key={i} row={row} place={place} position={position} turn={turn} tp={tp}/>
        })}
    </div>
  )
}
