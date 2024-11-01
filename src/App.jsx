import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount ((prev) => {return prev + 1})
  }

  const decrease = () => {
    if (count === 0) return;
    setCount ( count - 1)
  }

  return (
    <div className='counter'>
      <button onClick={decrease}>-</button>
      {count}
      <button onClick={increase}>+</button>
    </div>
  )
}

export default App
