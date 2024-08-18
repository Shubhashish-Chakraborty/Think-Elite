import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { WebDetail } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WebDetail/>
    </>
  )
}

export default App
