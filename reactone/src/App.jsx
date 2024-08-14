import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("clicked", counter)
    if(counter < 20){
      setCounter(counter + 1)
    } 
  }

  const removeValue = () => {
    if(counter > 0)
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>chai aur code</h1>
      <h3>Counter value: {counter}</h3>

      <button
        onClick={addValue}
      >Add Value</button>
      <br /> <br />
      <button onClick={removeValue} >Remove value</button>

    </>
  )
}

export default App
