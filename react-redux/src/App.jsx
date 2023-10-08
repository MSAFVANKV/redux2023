import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import State from '../src/state'
import './App.css'
import { Provider } from 'react-redux'
import Store from './redux/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <>
      <State/>
      </>
   
  )
}

export default App
