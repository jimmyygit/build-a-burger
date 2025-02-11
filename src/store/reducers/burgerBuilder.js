import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  ingredients: null,
  totalPrice: 3,
  error: false,
  building: false,
}

const INGREDIENT_PRICES = {
  salad: 3,
  cheese: 5,
  meat: 2,
  bacon: 1,
}

const addIngredient = (state, action) => {
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
  const updateState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  }
  return updateObject(state, updateState)
}

const removeIngredient = (state, action) => {
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
  const updateState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  }
  return updateObject(state, updateState)
}

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: 3,
    error: false,
    building: false,
  })
}

const clearIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
  })
}

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action)
    case actionTypes.CLEAR_INGREDIENTS: return clearIngredients(state, action)
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action)
    default: return state;
  }
}

export default reducer