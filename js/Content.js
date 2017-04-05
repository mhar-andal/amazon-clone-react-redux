import React, { Component, PropTypes } from 'react'
import data from './listings.json'
import { connect } from 'react-redux'
import ItemCard from './ItemCard'

class Content extends Component {
  render () {
    const listings = data.listings
    return (
      <div className='container'>
        {listings
          .filter((item) => {
            return (
              item.keywords.join(' ').toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0
            )
          })
          .map((item) => {
            return (
              <ItemCard key={item.id} item={item} />
            )
          })
        }
      </div>
    )
  }
}

const { string } = PropTypes
Content.propTypes = {
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Content)
