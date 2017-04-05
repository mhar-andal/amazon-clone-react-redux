import React, { Component } from 'react'
import NavbarHead from './Navbar'
import Content from './Content'
import Sidebar from './Sidebar'

class Landing extends Component {
  render () {
    return (
      <div>
        <NavbarHead />
        <Sidebar />
        <Content />
      </div>
    )
  }
}

export default Landing
