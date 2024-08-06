import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footerr'

export default class Layout extends Component {
  render() {
    return (
    <>
    <Header></Header>
    {this.props.children}
    <Footer></Footer>
    </>
    )
  }
}
