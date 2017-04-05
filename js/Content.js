import React, { Component, PropTypes } from 'react'
import data from './listings.json'
import { connect } from 'react-redux'
import ItemCard from './ItemCard'
import './Content.css'

class Content extends Component {
  render () {
    const listings = data.listings
    return (
      <div className='container-fluid'>
        <div className='content'>
          {listings
            .filter((item) => {
              return (
                item.keywords.join(' ').toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0
              )
            })
            .filter((item) => {
              return (
                item.aggregateRating >= this.props.ratingMin
              )
            })
            .map((item) => {
              return (
                <ItemCard key={item.id} item={item} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

const { string, number } = PropTypes
Content.propTypes = {
  searchTerm: string,
  ratingMin: number

}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    ratingMin: state.ratingMin
  }
}

export default connect(mapStateToProps)(Content)
