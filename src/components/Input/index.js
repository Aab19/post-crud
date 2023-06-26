import React from 'react'
import PropTypes from 'prop-types'

import {Input as ChakraInput} from '@chakra-ui/react'

const CustomInput = ({placeholder, size, ...props}) => {
  return <ChakraInput placeholder={placeholder} size={size} {...props} />
}

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
}

CustomInput.defaultProps = {
  placeholder: 'placeholder',
  size: 'md',
}

export default React.memo(CustomInput)
