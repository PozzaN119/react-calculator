import React, { useState } from 'react'
import Key from './key.js'

const style = require('./style.json');

function App() {

  const [EQ, setEQ] = useState(() => {
    let init = {
      "nbr1":0,
      "op":0,
      "nbr2":0
    }
    return init
  })

  const clickHandler = (elEQ, val, e, debug = false) => {
    let copieEQ = {...EQ}
    const r = new Promise( _ => {})
    if(elEQ.constructor === Array && val.constructor === Array) {
      if(!(elEQ.length === val.length)) return r

      for(let i=0; i< elEQ.length; i++) {
        copieEQ[elEQ[i]] = val[i]
      }
    } else if(elEQ.constructor === String && val.constructor === Number) {
      copieEQ[elEQ] = val
    }

    setEQ(copieEQ)
    if(debug) console.log(EQ)
  }

  return (
    <div style={style.Main}>
      <Interface val={EQ}/>
      <Key val="7" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="8" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="9" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="+" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="4" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="5" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="6" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="-" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="1" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="2" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="3" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="*" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="<" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="0" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="=" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
      <Key val="/" sEQ={setEQ} EQ={EQ} handler={clickHandler}/>
    </div>
  )
}

function Interface(props) {
  let displayVal = props.val.nbr2
  if(props.val.nbr2 === 0) displayVal = props.val.nbr1

  return (
    <div style={style.Header}>
      <p style={style.Title}>Calculator</p>
      <input placeholder='$null' value={displayVal} style={style.Interface}  disabled/>
    </div>
  )
}

export default App