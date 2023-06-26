import {Text} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {useQuery} from 'react-query'
import {getPostById} from '../../utils/api'
import Detail from 'components/Detail'

const PostDetail = () => {
  const router = useRouter()
  const {id} = router.query

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery(['posts', id], () => getPostById(id))

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>Error loading post.</Text>
  }

  return <Detail post={post} />
}

export default PostDetail
