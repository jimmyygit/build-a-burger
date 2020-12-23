import React, { Component } from 'react'
import classes from './Layout.module.css'
import ToolBar from '../Navigation/ToolBar/ToolBar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default class Layout extends Component {
  state = {
    showSideDrawer: false,

  }


  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }
  
  render() {
    return (
      <>
        <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    )
  }
}
