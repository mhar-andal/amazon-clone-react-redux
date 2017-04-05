import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component {
  render () {
    return (
      <div className='sidebar'>
        <div className='sidebar-container container-fluid'>
          <div role='heading' className='sidebar-header'>
            Refine Search
          </div>
          <div className='filter-section'>
            <div className='inner-wrapper'>
              <ul>
                <li>
                  <div className='rating-slider'>
                    <h4 className='slide-header'>Rating</h4>
                    <span>Adjust Rating</span>
                    <div className='col-sm-12'>
                      <div className='slider' />
                    </div>
                  </div>
                </li>
              </ul>
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

export default Sidebar
