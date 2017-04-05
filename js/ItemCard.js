import React, { Component, PropTypes } from 'react'
import './ItemCard.css'

class ItemCard extends Component {
  render () {
    const { img, brandName, price, aggregateRating, productName } = this.props.item
    return (
      <div className='item-card'>
        <img className='image-card' src={img} />
        <h1 className='product-name'>{productName}</h1>
        <h3>{brandName}</h3>
        <h3>{price}</h3>
        <h3>{aggregateRating}</h3>
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
