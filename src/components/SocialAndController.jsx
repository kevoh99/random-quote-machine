import React from 'react'
import Social from './Social'
import Controller from './Controller'

const SocialAndController = (props) => {
  return (
    <div className='social-plus-controller'>
      <Social quote={props.quote} author={props.author} />
      <Controller handleChange={props.handleChange} />
    </div>
  )
}

export default SocialAndController
