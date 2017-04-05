import React, { Component, PropTypes } from 'react'
import RangeFilter from './RangeFilter'
import { connect } from 'react-redux'
import './Sidebar.css'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    // this.handleFilterChange = this.handleFilterChange.bind(this)
    // this.state = {
    //   filter: ''
    // }
  }

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

// const mapStateToProps = (state) => {
//   return {
//     filter: state.filter
//   }
// }
export default Sidebar
// export default connect(mapStateToProps)(Sidebar)
