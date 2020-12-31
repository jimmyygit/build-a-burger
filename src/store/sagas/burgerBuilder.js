import axios from '../../axios-orders'
import { put } from 'redux-saga/effects'
import * as actions from '../actions/index'

export function* initIngredientsSaga(action) {
  try {
    const res = yield axios.get('https://burger-387cb-default-rtdb.firebaseio.com/ingredients.json')
    yield put(actions.setIngredients(res.data))
  } catch (error) {
    yield put(actions.fetchIngredientsFailed())
  }
}