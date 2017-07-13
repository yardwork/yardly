import React from 'react'
import PropTypes from 'prop-types'

import AddressEntry from './address-entry'

const AddressList = props =>
  (<div>
    <p>{props}</p>
    <AddressEntry />
  </div>)

AddressList.defaultProps = {
  // message: 'Default message',
}

AddressList.PropTypes = {
  // message: PropTypes.string.isRequired,
}

export default AddressList
