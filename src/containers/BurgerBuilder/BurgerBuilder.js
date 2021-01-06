import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import axios from '../../axios-orders'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'



function BurgerBuilder(props) {
  const [purchasing, setPurchasing] = useState(false)


  const ings = useSelector(state => { return state.burgerBuilder.ingredients })
  const price = useSelector(state => { return state.burgerBuilder.totalPrice })
  const error = useSelector(state => { return state.burgerBuilder.error })
  const isAuthenicated = useSelector(state => { return state.auth.token !== null })

  const dispatch = useDispatch()
  const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName));
  const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));
  const onClearIngredients = () => dispatch(actions.clearIngredients())
  const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), [dispatch]);
  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));


  useEffect(() => {
    onInitIngredients()
  }, [onInitIngredients])

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0)
    return sum > 0
  }

  const purchaseHandler = () => {
    if (isAuthenicated) {
      setPurchasing(true)
    } else {
      onSetAuthRedirectPath('/checkout')
      props.history.push('/auth')
    }
  }

  const purchaseCancelHandler = () => {
    setPurchasing(false)
  }

  const purchaseContinueHandler = () => {
    onInitPurchase()
    props.history.push('/checkout')
  }

  const clearHandler = () => {
    onClearIngredients()
  }



  const disabledInfo = {
    ...ings
  }
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  let orderSummary = null
  let burger = error ? <p>Can't Load</p> : <Spinner />
  if (ings) {
    burger = (<>
      <Burger 
        ingredients={ings} />
      <BuildControls
        ingredientAdded={onIngredientAdded}
        ingredientRemoved={onIngredientRemoved}
        disabled={disabledInfo}
        purchasable={updatePurchaseState(ings)}
        ordered={purchaseHandler}
        price={price}
        isAuth={isAuthenicated}
        clear={clearHandler} /></>)

    orderSummary = <OrderSummary
      ingredients={ings}
      price={price}
      purchaseCancelled={purchaseCancelHandler}
      purchaseContinue={purchaseContinueHandler} />
  }

  // if (this.state.loading) {
  //   orderSummary = <Spinner />
  // }

  return (
    <>
      <Modal
        show={purchasing}
        modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  )

}



export default withErrorHandler(BurgerBuilder, axios)