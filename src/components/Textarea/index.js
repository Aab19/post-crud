import React from 'react'
import PropTypes from 'prop-types'

import {Textarea as ChakraTextarea} from '@chakra-ui/react'

const CustomTextArea = ({placeholder, size, rows, ...props}) => {
  return (
    <ChakraTextarea
      placeholder={placeholder}
      size={size}
      rows={rows}
      {...props}
    />
  )
}

CustomTextArea.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
  rows: PropTypes.number,
}

CustomTextArea.defaultProps = {
  placeholder: 'placeholder',
  size: 'md',
  rows: 4,
}

export default React.memo(CustomTextArea)
