import React, { useState } from 'react'
import Key from './key.js'

function App() {

  const [count, setCount] = useState(0)
  /*let displayVal = "$null"*/
  return (
    <div>
      <h1>Calculator</h1>
      <Interface val={count}/>
      <Key val="test" s={setCount} c={count}/>
    </div>
  )
}

function Interface(props) {
  return (
    <div>
      <input value={props.val} disabled/>
    </div>
  )
}

export default App