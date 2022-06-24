import React from 'react'

function key(props) {
  return (
    <div>
        <button onClick={() => props.s(props.c+1) }>
            {props.val}
        </button>
    </div>
  )
}

export default key