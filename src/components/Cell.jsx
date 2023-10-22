/* eslint-disable react/prop-types */

import { socket } from "../../socket"

export default function Cell({cell, place, turn, position, tp={tp}}) {

    const handleTp = () => {
        socket.emit('tp', {id: localStorage.getItem('sptuser'), position: {x: cell.x, y: cell.y}})
    }

    const movePlayer = (direction) => {
        socket.emit('move', {id: localStorage.getItem('sptuser'), direction, position})
    }


    const placePlayer = () => {
        socket.emit('place', {id: localStorage.getItem('sptuser'), position: {x: cell.x, y: cell.y}})
    }

    if(cell.type === 'sealed'){
        return (
            <div className="Wall"></div>
          )
    }

    

    if(place === true && cell.type === 'empty'){
        return (
            <div className="Cell hov" onClick={() => {placePlayer()}}></div>
          )
    }

    if(tp === true && cell.type === 'special'){
        return (
            <div className="Special" onClick={() => {handleTp()}} ></div>
          )
    }

    if((cell.type === 'empty' || cell.type === 'special' || cell.player !== null  ) && localStorage.getItem('sptuser') === turn && position.x !== -1){
        const cl = cell.type === 'empty' ? 'Cell': cell.player !== null ? 'Enemy' : 'Tp'
        console.log(cell.type)
        if(cell.x === position.x-1 && cell.y === position.y && tp===false){
            return (
                <div className={cl} onClick={() => {movePlayer('left')}}><div className="Playable"></div></div>
              )
        }
        if(cell.x === position.x+1 && cell.y === position.y && tp===false){
            return (
                <div className={cl} onClick={() => {movePlayer('right')}}><div className="Playable"></div></div>
              )
        }
        if(cell.x === position.x && cell.y-1 === position.y && tp===false){
            return (
                <div className={cl} onClick={() => {movePlayer('down')}}><div className="Playable"></div></div> //
              )
        }
        if(cell.x === position.x && cell.y+1 === position.y && tp===false) {
            return (
                <div className={cl} onClick={() => {movePlayer('top')}}><div className="Playable"></div></div>
              )
        }
    }

    if(cell.type === 'player'){
        if(cell.player === localStorage.getItem('sptuser')){
            return (
                <div className="Player"></div>
              )
            } else {
                return (
                    <div className="Enemy"></div>
                  )
            }
    }

    if(cell.type === 'special'){
        return (
            <div className="Tp"></div>
          )
    }

    if(cell.type === 'empty'){
        return (
            <div className="Cell" ></div>
          )
    }
  
}

// &&(
//     () ||
//     (cell.x === position.x+1 && cell.y === position.y) ||
//     (cell.x === position.x && cell.y === position.y-1) ||
//     (cell.x === position.x && cell.y === position.y+1) )
