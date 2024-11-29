import React from 'react'
import './Button.css'

const Button = ({buttonName, clickFunction, additionalClass}) => {
  return (
    <button className={`button ${additionalClass}`}
    onClick={clickFunction}>
        {buttonName}
    </button>
  )
}

export default Button