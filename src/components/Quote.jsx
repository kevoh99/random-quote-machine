import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const Quote = (props) => {
  return (
    <div>
      <div id='text'>
        <FaQuoteLeft aria-hidden='true' /> {' ' + props.quote}
      </div>
      <div id='author'>
        {props.author === null ? '- Unknown' : '- ' + props.author}
      </div>
    </div>
  )
}

export default Quote
