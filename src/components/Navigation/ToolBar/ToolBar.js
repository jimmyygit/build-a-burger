import React from 'react'
import classes from './ToolBar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

export default function ToolBar(props) {
  return (
    <header className={classes.ToolBar}>
      <div>MENU</div>
      <Logo />

      <nav>
        <NavigationItems />
      </nav>
    </header>
  )
}
