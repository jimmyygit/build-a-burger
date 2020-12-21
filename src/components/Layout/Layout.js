import React from 'react'
import classes from './Layout.module.css'
import ToolBar from '../Navigation/ToolBar/ToolBar'

export default function Layout(props) {
  return (
    <>
    <ToolBar />
    <main className={classes.Content}>
      {props.children}
    </main>
    </>
  )
}
