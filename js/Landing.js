import React, { Component } from 'react'
import NavbarHead from './Navbar'
import Content from './Content'

class Landing extends Component {
  render () {
    return (
      <div>
        <NavbarHead />
        <Content />
      </div>
    )
  }
}

export default Landing
