import {useForm} from 'react-hook-form'
import {useMutation, useQueryClient} from 'react-query'
import {useRouter} from 'next/router'
import {createPost} from '../../utils/api'

import Form from 'components/Form'

const CreatePost = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const rhForm = useForm()

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
      router.push('/')
    },
  })

  const onSubmit = async data => {
    await mutation.mutateAsync(data)
  }

  return (
    <Form
      heading="Create"
      rhForm={rhForm}
      onSubmit={onSubmit}
      mutation={mutation}
    />
  )
}

export default CreatePost
