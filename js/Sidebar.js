import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import './Sidebar.css'

class Sidebar extends Component {
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
      <div className='sidebar'>
        <div className='sidebar-container container-fluid'>
          <div role='heading' className='sidebar-header'>
            Refine Search
          </div>
          <div className='filter-section'>
            <div className='container-fluid'>
              <Row className='inner-wrapper'>
                <Col className='Ratings' sm={12} md={12}>
                  <div role='subheading' className='slide-header'>
                    <strong>Minimum Rating: </strong>
                    <span>{this.state.filter}</span>
                  </div>
                </Col>
              </Row>
              <Row className='slide-wrapper'>
                <input
                  min='0'
                  max='5'
                  onChange={this.handleFilterChange}
                  value={this.state.filter}
                  className='col-md-12'
                  type='range'
                />
              </Row>
            </div>
          </div>
          <div className='filter-section'>
            <div className='inner-wrapper'>
              <p>asdoih oa sdgoias dgioads gioasd gio adsoiha dsgios dagioh asgoihds agoi dsadghio sdgoihds goih sdgiohs daghio dgsaoih dsagoih dsaghio </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const { func, string } = PropTypes

Sidebar.propTypes = {
  dispatch: func,
  filter: string
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps)(Sidebar)
