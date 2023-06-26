import React from 'react'
import PropType from 'prop-types'

import {Box, Heading, Text} from '@chakra-ui/react'

const Detail = ({post}) => {
  return (
    <Box>
      <Heading>{post.title}</Heading>
      <Text>{post.body}</Text>
    </Box>
  )
}

Detail.propTypes = {
  post: PropType.object,
}

Detail.defaultProps = {
  post: {},
}

export default React.memo(Detail)
