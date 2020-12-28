import React, { Component } from 'react'
import { connect } from 'react-redux'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../store/actions/index'

class Orders extends Component {
  state = {
    orders: [],
    loading: true,

  }

  componentDidMount() {
    this.props.onFetchOrders()
    // axios.get('/orders.json')
    //   .then(res => {
    //     // console.log(res.data)
    //     let fetchedOrders = [];
    //     for (let key in res.data) {
    //       fetchedOrders.push({
    //         ...res.data[key],
    //         id: key,

    //       })
    //     }
    //     this.setState({loading: false, orders: fetchedOrders})
    //   })
    //   .catch(error => {
    //     this.setState({loading: false})
    //   })
  }

  render() {
    let orders = <Spinner />
    if (!this.props.loading) {
      orders = this.props.orders.map(order => {
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
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))