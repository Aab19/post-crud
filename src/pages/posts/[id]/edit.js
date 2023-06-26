import {useRouter} from 'next/router'
import {useForm} from 'react-hook-form'
import {useMutation, useQuery, useQueryClient} from 'react-query'
import {Text} from '@chakra-ui/react'
import {getPostById, updatePost} from '../../../utils/api'

import Form from 'components/Form'

const EditPost = () => {
  const router = useRouter()
  const {id} = router.query
  const queryClient = useQueryClient()

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery(['posts', id], () => getPostById(id), {
    onSuccess: post => {
      rhForm.reset(post)
    },
  })

  const rhForm = useForm({
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
    },
  })

  const mutation = useMutation(data => updatePost(id, data), {
    onSuccess: data => {
      queryClient.setQueryData(['posts', id], data)
      queryClient.invalidateQueries('posts')
      router.push(`/posts/${id}`)
    },
  })

  const onSubmit = async data => {
    await mutation.mutateAsync(data)
  }

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (isError) {
    return <Text>Error loading post.</Text>
  }

  return (
    <Form
      edit
      heading="Edit"
      rhForm={rhForm}
      onSubmit={onSubmit}
      mutation={mutation}
    />
  )
}

export default EditPost
