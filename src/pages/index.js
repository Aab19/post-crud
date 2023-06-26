import {useQuery} from 'react-query'
import {getPosts} from '../utils/api'
import {Text} from '@chakra-ui/react'

import List from 'components/List'

const Home = () => {
  const {data: posts, isLoading, isError} = useQuery('posts', getPosts)

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>Error loading posts.</Text>
  }

  return <List posts={posts} />
}

export default Home
