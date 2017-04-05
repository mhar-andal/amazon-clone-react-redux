import React, { Component, PropTypes } from 'react'
import './ItemCard.css'

class ItemCard extends Component {
  render () {
    const { brandName, price, aggregateRating, productName } = this.props.item
    return (
      <div className='item-card'>
        <img className='image-card' src='http://hackathon-in-a-box.org/img/box.png' />
        <h1 className='product-name'>{productName}</h1>
        <h3 className='brand-name'>{brandName}</h3>
        <h3 className='price'>${price}</h3>
        <h3 className='rating'>{aggregateRating}</h3>
      </div>
    )
  }
}

const { string, array, number, shape } = PropTypes
ItemCard.propTypes = {
  item: shape({
    img: string,
    brandName: string,
    brandLogo: string,
    price: number,
    prime: number,
    aggregateRating: number,
    productName: string,
    keywords: array
  })
}

export default ItemCard
