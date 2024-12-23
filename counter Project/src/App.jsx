import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  const addValue = () => {

    // counter = counter + 1
    // setCounter(counter + 1)

    if (counter < 20) { 
      setCounter(counter + 1);
    }
    
  }
  const removeValue = ()=>{
    // setCounter(counter - 1)

    if (counter > 0) { 
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Velue: {counter}</h2>
      <br />
      <button onClick={addValue}>Add Velue</button>
      <button onClick={removeValue}>Remove Velue</button>
    </>
  )
}

export default App
