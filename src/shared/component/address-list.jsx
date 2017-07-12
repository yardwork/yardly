import React from 'react'
import PropTypes from 'prop-types'

const AddressList = props =>
  (<div>
    <p>{props}</p>
    <AddressEntry />
  </div>)

AddressList.defaultProps = {
  // message: 'Default message',
}

AddressList.propTypes = {
  // message: PropTypes.string.isRequired,
}

export default AddressList
