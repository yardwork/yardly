import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import PropTypes from 'prop-types'

const AddressForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div>
      <h1>Enter your Address Here</h1>
      <form onSubmit={handleSubmit}>
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

// Address.propTypes = {
//   address: PropTypes.Object.isRequired,
// }

export default AddressForm({
  form: 'simple', // a unique identifier for this form
})
