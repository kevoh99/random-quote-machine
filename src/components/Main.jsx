import React from 'react'
import Quote from './Quote'
import SocialAndController from './SocialAndController'

const Main = (props) => {
  return (
    <div id='quote-box'>
      <Quote quote={props.quote} author={props.author} />
      <SocialAndController
        quote={props.quote}
        author={props.author}
        handleChange={props.handleChange}
      />
    </div>
  )
}

export default Main
