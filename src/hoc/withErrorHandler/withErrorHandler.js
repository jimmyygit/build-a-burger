import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'

export default function withErrorHandler(WrappedComponent, axios) {
  return class extends Component {
    state = {
      error: null,
    }


    componentWillMount() {
      this.reqInterceptor =  axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req;
      })
      this.resInterceptor =  axios.interceptors.response.use(res => res, error => {
        this.setState({error: error})
      })
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }

    componentWillUnmount () {
      // console.log('unmount', this.reqInterceptor, this.resInterceptor)
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.resInterceptor)
    }
    
    render() {
      return (
        <>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

// bruh idk func