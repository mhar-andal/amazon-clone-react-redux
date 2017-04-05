import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

class RangeFilter extends Component {
  constructor (props) {
    super(props)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.state = {
      filter: ''
    }
  }
  handleFilterChange (event) {
    // this.props.dispatch(event.target.value)
    this.setState({ filter: event.target.value })
  }
  render () {
    return (
      <div className='filter-section'>
        <div className='container-fluid'>
          <Row className='slide-wrapper'>
            <Col sm='2'>
              ({this.state.filter})
            </Col>
            <Col sm='10'>
              <input
                min='0'
                max='5'
                onChange={this.handleFilterChange}
                value={this.state.filter}
                className='col-md-12'
                type='range'
              />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
const { func, string } = PropTypes

RangeFilter.propTypes = {
  dispatch: func,
  filter: string
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps)(RangeFilter)
