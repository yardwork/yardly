import React from 'react'

const Button = Props =>
  <button onClick={Props.handleClick}>{Props.label}</button>

export default Button
