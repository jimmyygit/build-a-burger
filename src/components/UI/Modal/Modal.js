import React from 'react'
import classes from './Modal.module.css'
import BackDrop from '../BackDrop/BackDrop'

function Modal(props) {
  // shouldComponentUpdate(nextProp, nextState) {
  //   // console.log('modal shold?')
  //   return nextProp.show !== this.props.show || nextProp.children !== this.props.children
  // }

  return (
    <>
      <BackDrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </>
  )
}

export default React.memo(Modal, (prevProps, nextProps) =>
  nextProps.show === prevProps.show &&
  nextProps.children === prevProps.children)