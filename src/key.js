import React from 'react'

const style = require('./style.json');

function getOpId(op) {
  let r = null

  if(op === "+") r = 1
  if(op === "-") r = 2
  if(op === "*") r = 3
  if(op === "/") r = 4

  return r
}

function fusionTwoNbr(nbrBase, nbrToAdd) {

  let lenShift = String(nbrToAdd).length
  let r = nbrBase * (10**lenShift)
  r = r + nbrToAdd

  return r
}

function deleteLastDigitOfNbr(nbr) {
  let r = String(nbr)
  console.log(r.length)
  if(r.length > 1) {
    r = r.slice(0,-1)
  } else {
    r = 0
  }
  return parseInt(r)
}

function exeOp(nbr1, nbr2, op) {

  return new Promise( res => {
    if(op === 1) {
      res(exeSum(nbr1, nbr2))
    } if(op === 2) {
      res(exeMin(nbr1, nbr2))
    } if(op === 3) {
      res(exeTim(nbr1, nbr2))
    } if(op === 4) {
      res(Math.round(exeDiv(nbr1, nbr2)))
    } 
  })
}

function exeSum(nbr1, nbr2) {return (parseInt(nbr1) + parseInt(nbr2))}
function exeMin(nbr1, nbr2) {return (parseInt(nbr1) - parseInt(nbr2))}
function exeTim(nbr1, nbr2) {return (parseInt(nbr1) * parseInt(nbr2))}
function exeDiv(nbr1, nbr2) {return (parseInt(nbr1) / parseInt(nbr2))}

function fromCharToNumber(c) {
  let l = ['+','-','*','/','<','=']
  if(l.includes(c)) return(l.indexOf(c) + 10)
  return c
}

function key(props) {

  const s = {
    "grid-area": "key"+fromCharToNumber(props.val)
  }

  // console.log(s)

  const click = async(e) => {

    // props.handler("nbr1", parseInt(props.val), e, true)

    // Enter case
    if([">","="].includes(props.val)) {
      const res = await exeOp(props.EQ.nbr1, props.EQ.nbr2, props.EQ.op)
      console.log(res)
      await props.handler(["nbr1","nbr2","op"], [res,0,0], e, true)

    // Delete case
    } else if(props.val === "<") {
      if(props.EQ.op === 0) {
        props.handler("nbr1", deleteLastDigitOfNbr(props.EQ.nbr1), e, true)
      } else {
        props.handler("nbr2", deleteLastDigitOfNbr(props.EQ.nbr2), e, true)
      }
    
    // Operator key on case
    } else if(["+","-","*","/"].includes(props.val)){
      props.handler("op", getOpId(props.val), e, true)
    
    // Number key on case
    } else {
      if(props.EQ.op === 0) {
        props.handler("nbr1", fusionTwoNbr(props.EQ.nbr1, parseInt(props.val)), e, true)
      } else {
        props.handler("nbr2", fusionTwoNbr(props.EQ.nbr2, parseInt(props.val)), e, true)
      }
    }
  }
  
  return (
    <div style={s}>
      <button onClick= {click} style={style.Key}>
        {props.val}
      </button>
    </div>
  )
}

export default key