import React from 'react'
import PropTypes from 'prop-types'

import AddressEntry from './address-entry'

const AddressList = () =>
  (<div>
    <AddressEntry />
  </div>)

AddressList.defaultProps = {
  // message: 'Default message', 
}

AddressList.propTypes = {
  // message: PropTypes.string.isRequired,
}

export default AddressList
