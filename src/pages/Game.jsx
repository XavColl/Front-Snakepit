import { useEffect, useState } from "react"
import { socket } from "../../socket"
import Board from "../components/Board"
import { Navigate } from "react-router-dom"

export default function Game() {

    const [gameData, setGameData] = useState({})
    const [place, setPlace] = useState(false)
    const [turn,setTurn] = useState('')
    const [position,setPosition] = useState({x: -1, y: -1})
    const [tp, setTp] = useState(false) 
    const [nav,setNav] = useState(false)

    const findPosition = (game) => {
      game.board.forEach((row, i) => {
        row.forEach((cell, j) => {
          if(cell.player === localStorage.getItem('sptuser')){
            setPosition({x: i, y: j})
          }
        })
      })
    }


      socket.on('gameData', (data) => {
        
          console.log('weeee')
          setGameData(data)
          console.log(gameData)
          socket.emit('ready', localStorage.getItem('sptuser'))
        
      })


    socket.on('placePlayer1', (game) => {
      setGameData(game)
      console.log(place)
      setPlace(true)
    })

    socket.on('placePlayer2', (game) => {
      setGameData(game)
      setPlace(true)
    })

    socket.on('placed', (game) => {
      console.log('1')
      setGameData(game)
      setPlace(false)
    })

    socket.on('startGame', (game) => {
      console.log('start')
      setGameData(game)
      findPosition(game)
      setTurn(game.players[game.turn])
    })

    socket.on('moved', (game) => {
      setGameData(game)
      setTurn(game.players[game.turn])
      findPosition(game)
      setTp(false)
    })

    socket.on('tp on', game => {
      setGameData(game)
      setTurn(game.players[game.turn])
      findPosition(game)
      setTp(true)
    })

    socket.on('win', () => {
      alert('You won')
      setNav(true)
    })


    socket.on('lose', () => {
      alert('You lost')
      setNav(true)
    })

    useEffect(() => {

      socket.emit('connec', localStorage.getItem('sptuser'))
      socket.emit('start', localStorage.getItem('sptuser'))
      const cleanup = () => {
        socket.emit('will disconnect', localStorage.getItem('sptuser'))
      };
      
      window.addEventListener('beforeunload', cleanup);
      
      return () => {
        window.removeEventListener('beforeunload', cleanup);
      };
    }, []);

    if(nav){
      return <Navigate to='/dashboard' />
    }

    if(gameData.board){
        return <Board game={gameData} place={place} turn={turn} position={position} tp={tp} />
    }

  return (
    <div>Board</div>
  )
}
