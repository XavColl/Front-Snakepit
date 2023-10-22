import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { userLoader } from './loaders'
import Dashboard from './pages/Dashboard'
import Error from './components/Error'
import Game from './pages/Game'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
        <Route path='/' element={<Home />} errorElement={<Error />}></Route>
        <Route path='/dashboard' element={<Dashboard />} loader={userLoader} errorElement={<Error />}></Route>
        <Route path='/game' element={<Game />} errorElement={<Error />}></Route>
        <Route path='/*' element={<Error />} errorElement={<Error />}></Route>
  </Route>
))

function App() {

  
  
  return <RouterProvider router={router}  />

}

export default App
