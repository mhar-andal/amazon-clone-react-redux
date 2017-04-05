import React, { Component, PropTypes } from 'react'

class ItemCard extends Component {
  constructor (props) {
    super (props)

  }
  render () {
    const { img, brandName, brandLogo, price, prime, aggregateRating, productName, keywords } = this.props.item
    return (
      <div className="item-card">
        <img src={img} />
        <h1>{productName}</h1>
        <h3>{brandName}</h3>
        <img src={brandLogo} />
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
