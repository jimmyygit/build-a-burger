import React from 'react'
import classes from './Input.module.css'

export default function Input(props) {
  let inputElement = null;
  let inputClasses = [classes.InputElement]

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid)
  }
  inputClasses = inputClasses.join(' ')

  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        className={inputClasses}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
      break
    case ('textarea'):
      inputElement = <textarea
        className={inputClasses}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
      break
    case ('select'):
      inputElement = (
        <select
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed} >
          {props.elementConfig.options.map(option => {
            return <option
              key={option.value}
              value={option.value}>
              {option.displayValue}
            </option>
          })}
        </select>
      )
      break
    default:
      inputElement = <input
        className={inputClasses}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
  }


  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      { inputElement}
    </div>
  )
}
