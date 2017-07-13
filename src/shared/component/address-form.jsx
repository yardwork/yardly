import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { load as loadAccount } from '../reducer/address'

let AddressForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  // handleSubmit = (values) {
  //   console.log(values)
  // }
  return (
    <div>
      <h1>Enter your Address Here</h1>
      <form onSubmit={handleSubmit((values) => { console.log(values) })}>
        <div>
          <div>
            <Field
              name="address"
              component="input"
              type="text"
              placeholder="Address"
            />
          </div>
          <div>
            <Field
              name="city"
              component="input"
              type="text"
              placeholder="City"
            />
          </div>
          <div>
            <Field
              name="state"
              component="input"
              type="text"
              placeholder="State (e.g. TX or NY)"
            />
          </div>
          <div>
            <Field
              name="zipCode"
              component="input"
              type="text"
              placeholder="Zip Code"
            />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  )
}

// Address.defaultProps = {
//   address: {},
// }

AddressForm.propTypes = {
  // handleSubmit: PropTypes.Function.isRequired,
  // submitting: PropTypes.Function.isRequired,
  // pristine: PropTypes.Function.isRequired,
  // reset: PropTypes.Function.isRequired,
}

AddressForm = reduxForm({
  form: 'addressForm', // a unique identifier for this form
})(AddressForm)

// AddressForm = connect(
//   state => ({
//     initialValues: state.account.data,
//   }), null)(AddressForm)

export default AddressForm
