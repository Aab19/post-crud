import React from 'react'
import PropType from 'prop-types'
import NextLink from 'next/link'

import {Box, Heading, Text} from '@chakra-ui/react'

const List = ({posts}) => {
  if (posts.length === 0) {
    return <Text>No posts available.</Text>
  }

  return (
    <Box style={{background: 'red'}}>
      {posts.map(post => (
        <Box key={post.id} mb={4} p={4} border="1px" borderColor="gray.300">
          <NextLink href={`/posts/${post.id}`} passHref>
            <Heading size="md">{post.title}</Heading>
          </NextLink>
          <Text>{post.body}</Text>
        </Box>
      ))}
    </Box>
  )
}

List.propTypes = {
  posts: PropType.array,
}

List.defaultProps = {
  posts: [],
}

export default React.memo(List)
