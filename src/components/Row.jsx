/* eslint-disable react/prop-types */

import Cell from "./Cell"

export default function Row({row, place, turn, position, tp}) {


  return (

    
    <div className="Row">
        {row.map((cell, i) => {
            return <Cell key={i} cell={cell} place={place} turn={turn} position={position} tp={tp} />
        })}
    </div>
  )
}
