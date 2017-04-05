import React, { Component } from 'react'
import { Navbar, Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap'
import categories from './temp'
import Category from './Category'
import './Navbar.css'

class NavbarHead extends Component {
  render () {
    return (
      <div id='navbar'>
        <Grid>
          <Row className='navbar-container'>
            <Col className='logo-container' sm={4} md={4}>
              <img className='logo' src='https://raw.githubusercontent.com/mhar-andal/amazon-clone/master/public/newprime.png' alt='logo' />
            </Col>
            <Col className='links-container' sm={8} md={8}>
              <Navbar className='search'>
                <Navbar.Collapse>
                  <Navbar.Form pullLeft>
                    <FormGroup>
                      <FormControl className='searchbar' type='text' placeholder='Ex. 6ft Lightning Cable' />
                    </FormGroup>
                    {' '}
                    <Button className='searchbutton' type='submit'>Search</Button>
                  </Navbar.Form>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col className='categories' sm={12} md={12}>
              {categories.sort().map((cate, index) => (
                <Category key={cate} name={cate} />
              ))}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default NavbarHead
