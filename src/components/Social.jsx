import React from 'react'
import { FaTwitter } from 'react-icons/fa'

const Social = (props) => {
  return (
    <div className='social'>
      <div>
        <button id='tweet-btn'>
          <a
            href={
              'https://twitter.com/intent/tweet?hashtags=quotes&text="' +
              props.quote +
              '" ' +
              props.author
            }
            target='_blank'
            title='Tweet this quote'
            rel='noreferrer'
            id='tweet-quote'
          >
            <FaTwitter />
          </a>
        </button>
      </div>
    </div>
  )
}

export default Social
