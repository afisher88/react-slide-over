import React from 'react'

const Button = (cell, row, rowIndex, formatExtraData) => {
  return (
    <button type="button" onClick={formatExtraData.onClick}>Click me!</button>
  )
}

export default Button;