import React, { Component } from 'react'
import { setSearchTerm } from './redux/actionCreators'
import { connect } from 'react-redux'
import './Category.css'

class Category extends Component {
  constructor (props) {
    super(props)
    this.handleTabClick = this.handleTabClick.bind(this)
  }
  handleTabClick () {
    if (this.props.name === 'All') {
      this.props.dispatch(setSearchTerm(''))
    } else {
      this.props.dispatch(setSearchTerm(this.props.name))
    }
  }
  render () {
    return (
      <a onClick={this.handleTabClick} className='category-link'>{this.props.name}</a>
    )
  }
}

const { string, func } = React.PropTypes
Category.propTypes = {
  name: string.isRequired,
  dispatch: func
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Category)
