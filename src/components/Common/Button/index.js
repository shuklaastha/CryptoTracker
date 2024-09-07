import './style.css'

import React from 'react'

function Button({text, onClick, outlined}) {
  return (
    <div className={outlined?'outlined-btn':'btn'} onClick={() => onClick()}>
      {text}
    </div>
  )
}

export default Button