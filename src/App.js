import React, { useEffect, Suspense } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
// import asyncComponent from './hoc/asyncComponent/asyncComponent'

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
// import Checkout from './containers/Checkout/Checkout'
// import Orders from './containers/Orders/Orders'
// import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import style from './App.module.css'

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout')
})
const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders')
})
const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth')
})

function App(props) {
  const { onTryAutoSignUp } = props 
  
  useEffect(() => {
    onTryAutoSignUp()
  }, [onTryAutoSignUp])


  let routes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props}/> } />
      <Route path="/" exact component={BurgerBuilder} />
      {/* <Redirect to="/"/> */}
      {/* lol something wrong with this ^^ */}
    </Switch>
  )

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" render={(props) => <Checkout {...props}/> } />
        <Route path="/orders" render={(props) => <Orders {...props}/> } />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" render={(props) => <Auth {...props}/> } />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <div className={style.App}>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
        {routes}
        </Suspense>
      </Layout>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

// hehe