import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import style from './App.module.css'

export default class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}
