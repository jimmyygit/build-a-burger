import React from 'react'
import classes from './Logo.module.css'
import { NavLink } from 'react-router-dom'
import burgerLogo from '../../assets/images/burger-logo.png'


export default function Logo(props) {
  return (
    <NavLink to='/'>
      <div className={classes.Logo} style={{ height: props.height }}>
        <img src={burgerLogo} alt="burger" />
      </div>
    </NavLink>
  )
}
