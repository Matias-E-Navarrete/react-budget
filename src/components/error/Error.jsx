import React from 'react'
import PropTypes from 'prop-types';

export const Error = ({message}) => <p className="alert alert-danger error">{message}</p>

Error.proptype = {
    message: PropTypes.string.isRequired
}

