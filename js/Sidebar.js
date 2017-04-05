import React, { Component } from 'react'
import RangeFilter from './RangeFilter'
import './Sidebar.css'

class Sidebar extends Component {
  render () {
    return (
      <div className='sidebar'>
        <div className='sidebar-container container-fluid'>
          <div role='heading' className='sidebar-header'>
            Refine Search
          </div>
          <RangeFilter />
        </div>
      </div>
    )
  }
}

export default Sidebar
