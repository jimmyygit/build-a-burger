import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../store/actions/index'

function Orders (props) {
  const { onFetchOrders, token, userId } = props

  useEffect(() => {
    // console.log(this.props.token)
    onFetchOrders(token, userId)
  }, [onFetchOrders, token, userId])



    let orders = <Spinner />
    if (!props.loading) {
      orders = props.orders.map(order => {
        return <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
          date={order.date} />
      })
    }

    if (orders.length === 0) {
      orders = <h2 style={{width: "100%", textAlign: "center"}}> No orders yet! </h2>
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