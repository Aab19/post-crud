import React from 'react'
import PropTypes from 'prop-types'

import {Button as ChakraButton} from '@chakra-ui/react'

const CustomButton = ({text, colorScheme, onClick, ...props}) => {
  return (
    <ChakraButton colorScheme={colorScheme} onClick={onClick} {...props}>
      {text}
    </ChakraButton>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  colorScheme: PropTypes.string,
  onClick: PropTypes.func,
}

CustomButton.defaultProps = {
  colorScheme: 'teal',
  onClick: () => {},
}

export default React.memo(CustomButton)
