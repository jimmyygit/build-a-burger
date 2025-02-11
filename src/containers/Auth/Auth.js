import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../store/actions/index'
import { updateObject, checkValidity } from '../../shared/utility'

import classes from './Auth.module.css'


function Auth(props) {
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Email',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password',
      },
      value: '',
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  })

  const [isSignUp, setIsSignUp] = useState(true)

  const {buildingBurger, authRedirectPath, onSetAuthRedirectPath} = props

  useEffect(() => {
    if (!buildingBurger && authRedirectPath !== '/') {
      onSetAuthRedirectPath()
    }
  }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath])


  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, authForm[controlName].validation),
        touched: true
      })
    })
    setAuthForm(updatedControls)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(authForm.email.value, authForm.password.value)
    props.onAuth(authForm.email.value, authForm.password.value, isSignUp)
  }

  const switchAuthModeHandler = () => {
    setIsSignUp(!isSignUp)
  }



  const formElementArray = []
  for (let key in authForm) {
    formElementArray.push({
      id: key,
      config: authForm[key]
    })
  }

  let form = formElementArray.map(formElement => {
    return <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)} />
  })

  if (props.loading) {
    form = <Spinner />
  }

  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <p className={classes.Error}> {props.error.message} </p>
    )
  }

  let authRedirect = null
  if (props.isAuthenicated) {
    authRedirect = <Redirect to={props.authRedirectPath} />
  }

  return (
    <div className={classes.Auth}>
      {authRedirect}
      {errorMessage}
      <h2> {isSignUp ? "Sign Up" : "Sign In"} </h2>
      <form onSubmit={submitHandler}>
        {form}
        <Button
          btnType="Success">SUBMIT</Button>
      </form>
      <Button
        clicked={switchAuthModeHandler}
        btnType="Danger"> Switch to {isSignUp ? "Sign In" : "Sign Up"} </Button>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenicated: state.auth.token !== null,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth) 