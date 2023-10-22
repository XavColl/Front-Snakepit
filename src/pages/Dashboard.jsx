import { Navigate, useLoaderData } from "react-router-dom"
import { socket } from "../../socket"
import { useEffect, useState } from "react"

export default async function Dashboard() {
  const data = await useLoaderData()
  const player = data.player
  const score = player.score
  const [navigate, setNavigate] = useState(false)

  socket.on('launch!', () => {
    setNavigate(true)
  })

  socket.on('ranked timeout', () => {
    alert('ranked timeout')
  })

  const play = () => {
    socket.emit('ranked', localStorage.getItem('sptuser'))
  }

  useEffect(() => {
    socket.emit('connec', localStorage.getItem('sptuser'))
  }, [])

  if(navigate){
    return <Navigate to={'/Front-Snakepit/game'} />
  }

  if(!localStorage.getItem('sptuser') || !localStorage.getItem('sptoken')) {
    <Navigate to={'/Front-Snakepit/'} />
  }

  if(!player){
    return <></>
  }

  return (
    <main>
      <h1>Welcome to the Snakepit, {player.pseudo}</h1>
      <h2>Your score: {`${score}`}</h2>
      <button onClick={() => play()}>Play</button>
    </main>
  )

  
}


