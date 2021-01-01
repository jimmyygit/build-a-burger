import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import classes from './Layout.module.css'
import ToolBar from '../Navigation/ToolBar/ToolBar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

function Layout(props) {
  const [showSideDrawer, setShowSideDrawer] = useState(false)


  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer)
  }


  return (
    <>
      <ToolBar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={showSideDrawer}
        closed={sideDrawerCloseHandler} />
      <main className={classes.Content}>
        {props.children}
      </main>
    </>
  )

}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout)