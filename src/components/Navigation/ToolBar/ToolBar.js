import React from 'react'
import classes from './ToolBar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

export default function ToolBar(props) {
  return (
    <header className={classes.ToolBar}>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
      <div className={classes.Logo}>
        <Logo />
        {/* could do height="80%" */}
      </div>

      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuthenicated={props.isAuth}/>
      </nav>
    </header>
  )
}
