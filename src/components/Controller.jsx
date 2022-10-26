import React from 'react'

const Controller = (props) => {
  return (
    <div className='controller'>
      <div>
        <button id='new-quote' onClick={props.handleChange}>
          <span id='ctrl-btn-text'>Next Quote</span>
        </button>
      </div>
    </div>
  )
}

export default Controller
