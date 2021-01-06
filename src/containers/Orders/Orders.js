import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../store/actions/index'

function Orders (props) {
  const { onFetchOrders } = props

  useEffect(() => {
    // console.log(this.props.token)
    onFetchOrders(props.token, props.userId)
  }, [props, onFetchOrders])



    let orders = <Spinner />
    if (!props.loading) {
      orders = props.orders.map(order => {
        return <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price} />
      })
    }

    return (
      <div>
        { orders }
      </div>
    )
  
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))