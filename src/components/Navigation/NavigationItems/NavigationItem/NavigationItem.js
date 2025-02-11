import React from 'react'
import classes from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'

export default function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        exact={props.exact} 
        to={props.link} 
        activeClassName={classes.active}
        // className={props.active ? classes.active : null}
        >{props.children}
      </NavLink>
    </li>
  )
}
