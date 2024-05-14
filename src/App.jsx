import React, { useState } from 'react'
import "./App.css";


const App = () => {
  let [count,setCount] = useState(0)
  
  let addValue = () => {
    setCount(count+1)
  }
  let removeValue = () => {
    if(count>0){
    setCount(count-1)
    }
  }
  const resetValue = () => {
    setCount(0)
  }
  return (
  <div >
    <h3>Count is: {count}</h3>
    <button onClick={addValue}>Increment</button>
    <br /> <br />
    <button onClick={removeValue}>Decrement</button>
    <br /><br />
    <button onClick={resetValue}>Reset</button>
  </div>
  )
}

export default App
