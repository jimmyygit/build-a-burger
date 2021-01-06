import * as actionTypes from './actionTypes'


export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  }
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  }
}

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  }
}

export const clearIngredients = () => {
  return {
    type: actionTypes.CLEAR_INGREDIENTS,
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,

  }
}

export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS
  }
  // return dispatch => {
  //   axios.get('https://burger-387cb-default-rtdb.firebaseio.com/ingredients.json')
  //     .then(res => {
  //       dispatch(setIngredients(res.data))
  //     })
  //     .catch(error => {
  //       dispatch(fetchIngredientsFailed())
  //     }) 
  // }
}