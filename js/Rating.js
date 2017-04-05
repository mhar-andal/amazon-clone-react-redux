import React, { Component, PropTypes } from 'react'

class Rating extends Component {
  render () {
    return (
      <div>
        {Array(5).fill().map((_, i) => {
          if (i < this.props.rating) {
            return <img className='star' src='https://raw.githubusercontent.com/mhar-andal/amazon-clone-react-redux/master/public/star.PNG' />
          } else {
            return <img className='star' src='https://raw.githubusercontent.com/mhar-andal/amazon-clone-react-redux/master/public/emptystar.PNG' />
          }
        })}
      </div>
    )
  }
}

const { number } = PropTypes
Rating.propTypes = {
  rating: number
}

export default Rating
