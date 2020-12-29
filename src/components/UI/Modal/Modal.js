import React, { Component } from 'react'
import classes from './Modal.module.css'
import BackDrop from '../BackDrop/BackDrop'

export default class Modal extends Component {
  shouldComponentUpdate(nextProp, nextState) {
    // console.log('modal shold?')
    return nextProp.show !== this.props.show ||
            nextProp.children !== this.props.children
  }

  // componentWillUpdate() {
  //   console.log('modal will')
  // }
  
  render() {
    return (
      <>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </>
    )
  }


}
