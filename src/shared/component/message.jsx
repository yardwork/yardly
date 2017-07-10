import React from 'react'
import PropTypes from 'prop-types'

const Message = props =>
  (<div>
    <p>{props.message}</p>
  </div>)

Message.PropTypes = {
  message: PropTypes.string.isRequired,
}

export default Message
