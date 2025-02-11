import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]

export default function BuildControls(props) {
  

  return (
    <div className={classes.BuildControls}>
      <p>Price: {props.price.toFixed(2)}</p>

      {controls.map(ctrl => {
        return <BuildControl 
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
      })}
      <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>{props.isAuth ? 'ORDER' : 'SIGN IN TO ORDER'}</button>
      <button 
        className={classes.Clear}
        onClick={props.clear}>
        Clear
      </button>
    </div>
  )
}
