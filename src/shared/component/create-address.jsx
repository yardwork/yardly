import React from 'react'
import PropTypes from 'prop-types'

import AddressList from './address-list'

const Address = props =>
  (<div>
    <h1>Enter your Address Here</h1>
    <form>
      <h2>Address: </h2>
      <h2>City: </h2>
      <h2>State: </h2>
      <h2>Zip: </h2>
    </form>
    <h1>Or choose one of your current properties</h1>
    <AddressList />
  </div>)

Address.defaultProps = {
  address: {},
}

Address.propTypes = {
  address: PropTypes.Object.isRequired,
}

export default Address
