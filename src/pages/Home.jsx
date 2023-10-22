import { useEffect, useState } from "react"
import Login from "../components/Login"
import Signup from "../components/Signup"
import getUser from "../../lib/getUser"
import { Navigate } from "react-router-dom"

export default function Home() {
  console.log('hey')

  
  const [navigate, setNavigate] = useState(false)
  const [log, setLog] = useState(false)

  const handleButton = (b) => {
      setLog(b);
  }

  const autoLog = async (id) => {
    try{
      const data = await getUser(id)
      console.log(data)
      if(data.player.pseudo){
        setNavigate(true)
      }
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    autoLog(localStorage.getItem('sptuser'))
  }, [])

  if(navigate){
    return <Navigate to={'/Front-Snakepit/dashboard'} />
  }

  return (

    <main>
      <h1>Snakepit</h1>
        <button onClick={() => handleButton(true)}>Login</button>
        <button onClick={() => handleButton(false)}>Signup</button>
        {log? <Login /> : <Signup />}
    </main>
  )
}
