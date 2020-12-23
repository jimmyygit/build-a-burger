import React, { Component } from 'react'
import Button from '../../UI/Button/Button'

export default class OrderSummary extends Component {
  // changed from rfc
  // componentWillUpdate() {
  //   console.log('order will')
  // }
  
  
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
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
        <p> Total Price: {this.props.price}</p>
        <p>Continue to Checkout?</p>
        <Button
          btnType='Danger'
          clicked={this.props.purchaseCancelled}> CANCEL </Button>
        <Button
          btnType='Success'
          clicked={this.props.purchaseContinue}> CONTINUE </Button>
      </>
    )
  }

}
