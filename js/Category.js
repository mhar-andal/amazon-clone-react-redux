import React from 'react'
import './Category.css'

const Category = (props) => (
  <a className='category-link'>{props.name}</a>
)

const { string } = React.PropTypes

Category.propTypes = {
  name: string.isRequired
}

export default Category
