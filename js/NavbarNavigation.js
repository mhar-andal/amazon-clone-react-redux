import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Navbar, Grid, Row, Col, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap'
import { setSearchTerm } from './redux/actionCreators'
import { connect } from 'react-redux'
import './Navbar.css'

class NavbarHead extends Component {
  constructor (props) {
    super(props)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    this.state = {
      searchTerm: ''
    }
  }
  handleSearchSubmit (event) {
    event.preventDefault()
    this.props.dispatch(setSearchTerm(this.state.searchTerm))
    this.context.router.transitionTo('/')
  }
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  }
  render () {
    return (
      <div id='navbar'>
        <Grid>
          <Row className='navbar-container'>
            <Col className='logo-container' sm={4} md={4}>
              <Link to='/'><img className='logo' src='https://raw.githubusercontent.com/mhar-andal/amazon-clone-react-redux/master/public/newprime.png' alt='logo' /></Link>
            </Col>
            <Col className='links-container' sm={8} md={8}>
              <Navbar className='search'>
                <Navbar.Collapse>
                  <Navbar.Form pullLeft>
                    <FormGroup>
                      <form onSubmit={this.handleSearchSubmit}>
                        <FormControl onChange={this.handleSearchTermChange} className='searchbar' type='text' placeholder='Ex. 6ft Lightning Cable' />
                        <Button className='searchbutton' type='submit'>Search</Button>
                      </form>
                    </FormGroup>
                    {' '}
                  </Navbar.Form>
                  <Button className='button'><Glyphicon className='glyph' glyph='shopping-cart' /><span className='shopping-cart'>0</span></Button>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const { func, string } = PropTypes
NavbarHead.propTypes = {
  dispatch: func,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(NavbarHead)
