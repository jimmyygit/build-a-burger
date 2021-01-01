import React from 'react'
import Button from '../../UI/Button/Button'

export default function OrderSummary(props) {
  // changed from rfc
  // componentWillUpdate() {
  //   console.log('order will')
  // }


  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )
    })


  return (
    <>
      <h3>Order</h3>
      <p>has delicious:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p> Total Price: {props.price}</p>
      <p>Continue to Checkout?</p>
      <Button
        btnType='Danger'
        clicked={props.purchaseCancelled}> CANCEL </Button>
      <Button
        btnType='Success'
        clicked={props.purchaseContinue}> CONTINUE </Button>
    </>
  )

}
