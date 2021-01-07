import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

export default function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem
        link="/" exact>Burger Builder</NavigationItem>
      {props.isAuthenicated ? <NavigationItem link="/orders"> Orders </NavigationItem> : null } 
      {!props.isAuthenicated
        ? <NavigationItem link="/auth"> Login </NavigationItem>
        : <NavigationItem link="/logout"> Logout </NavigationItem>}
    </ul>
  )
}
