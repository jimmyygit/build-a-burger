import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  }
}

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,

  }
}

export const purchaseBurger = (orderData, token) => {
  return {
    type: actionTypes.PURCHASE_BURGER,
    orderData: orderData,
    token: token
  }
  // return dispatch => {
  //   dispatch(purchaseBurgerStart())
  //   axios.post('/orders.json?auth=' + token, orderData)
  //     .then(res => {
  //       console.log(res.data)
  //       dispatch(purchaseBurgerSuccess(res.data.name, orderData))
  //       // this.props.history.push('/')
  //     })
  //     .catch(error => dispatch(purchaseBurgerFail(error)))
  // }
}

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASED_INIT
  }
}

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  }
}

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  }
}


export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
}

export const fetchOrders = (token, userId) => {
  return {
    type: actionTypes.FETCH_ORDERS,
    token: token,
    userId: userId,
  }
  // return dispatch => {
  //   dispatch(fetchOrdersStart())
  //   const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
  //   axios.get('/orders.json' + queryParams)
  //     .then(res => {
  //       // console.log(res.data)
  //       let fetchedOrders = [];
  //       for (let key in res.data) {
  //         fetchedOrders.push({
  //           ...res.data[key],
  //           id: key,

  //         })
  //       }
  //       dispatch(fetchOrdersSuccess(fetchedOrders))
  //     })
  //     .catch(error => {
  //       dispatch(fetchOrdersFail(error))
  //     })
  // }
}