// import { connect } from 'react-redux'
//
// import AddressForm from '../component/address-form'
//
// const mapStateToProps = state => ({
//   message: state.hello.messageAsync,
// })
//
// export default connect(null)(AddressForm)

import React from 'react'
import AddressForm from '../component/address-form'

class AddressPage extends React.Component {
  Constructor(props) {
    super(props)
    this.submit = (values) => {
      // eslint-disable-next-line no-console
      console.log(values)
    }
  }
  render() {
    return (
      <AddressForm onSubmit={this.submit} />
    )
  }
}

export default AddressPage
