/* eslint-disable prettier/prettier */
import React from 'react'

import PropTypes from 'prop-types'

import { Container } from './styles'

export function ErrorMessage({ children }) {
  return <Container >{children}</Container>
}

ErrorMessage.propTypes = {
  children: PropTypes.string
}
