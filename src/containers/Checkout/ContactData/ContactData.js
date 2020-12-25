import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import classes from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import {withRouter} from 'react-router-dom'

class ContactData extends Component {
  state = {
    user: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault()
    console.log(this.props.ingredients)
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'namee',
        address: {
          street: '32 st',
          zipCode: '132',
          country: 'coun'
        },
        email: 'mail@',
      },
      deliveryMethod: 'fast'
    }
    axios.post('/orders.json', order)
      .then(res => { 
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(error => this.setState({ loading: false }))
  }

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="postalCode" placeholder="Postal Code" />
        <Button
          btnType="Success"
          clicked={this.orderHandler}> ORDER NOW </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h3> Enter Contact </h3>
        { form }
      </div>
    )
  }
}

export default withRouter(ContactData)