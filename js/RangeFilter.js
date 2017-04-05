import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setRatingMin } from './redux/actionCreators'

class RangeFilter extends Component {
  constructor (props) {
    super(props)

    this.handleRatingMinChange = this.handleRatingMinChange.bind(this)
  }
  handleRatingMinChange (event) {
    this.props.dispatch(setRatingMin(parseInt(event.target.value)))
  }
  render () {
    return (
      <div className='filter-section'>
        <div className='container-fluid'>
          <Row className='slide-wrapper'>
            <Col sm={2}>
              ({this.props.ratingMin})
            </Col>
            <Col sm={10}>
              <input
                min='0'
                max='5'
                onChange={this.handleRatingMinChange}
                value={this.props.ratingMin}
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
const { func, number } = PropTypes

RangeFilter.propTypes = {
  dispatch: func,
  ratingMin: number
}

const mapStateToProps = (state) => {
  return {
    ratingMin: state.ratingMin
  }
}

export default connect(mapStateToProps)(RangeFilter)
