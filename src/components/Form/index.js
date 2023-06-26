import React from 'react'
import PropType from 'prop-types'
import {Box, Heading, Text, FormLabel} from '@chakra-ui/react'

import CustomInput from '../Input'
import CustomTextArea from '../Textarea'
import CustomButton from '../Button'

const Form = ({heading, rhForm, onSubmit, mutation, edit}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: {errors},
  } = rhForm

  return (
    <Box>
      <Heading marginBottom={4}>{heading} Post</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormLabel htmlFor="title">Title:</FormLabel>

          <CustomInput
            id="title"
            name="title"
            placeholder="Fill title"
            ref={register('title', {required: true})}
            onChange={e => setValue('title', e.target.value)}
            defaultValue={edit ? getValues().title : ''}
          />
          {errors.title && <Text color="red">Title is required</Text>}
        </div>
        <div>
          <FormLabel htmlFor="body">Body:</FormLabel>
          <CustomTextArea
            id="body"
            name="body"
            placeholder="Fill Body"
            ref={register('body', {required: true})}
            onChange={e => setValue('body', e.target.value)}
            defaultValue={edit ? getValues().body : ''}
          />
          {errors.body && <Text color="red">Body is required</Text>}
        </div>
        <CustomButton
          marginTop={4}
          type="submit"
          text={
            mutation.isLoading
              ? `${edit ? 'Editing Post ...' : 'Creating Post ...'}`
              : `${edit ? 'Edit' : 'Create'}`
          }
          disabled={mutation.isLoading}
          isDisabled={mutation.isLoading}
        />
      </form>
      {mutation.isLoading && <Text marginTop={2}>{heading}ing post...</Text>}
      {mutation.isError && <Text marginTop={2}>Error {heading} post.</Text>}
    </Box>
  )
}

Form.propTypes = {
  heading: PropType.string.isRequired,
  rhForm: PropType.object,
  mutation: PropType.object,
  edit: PropType.bool,
  onSubmit: PropType.func.isRequired,
}

Form.defaultProps = {
  rhForm: {},
  mutation: {},
  edit: false,
  onSubmit: () => {},
}

export default React.memo(Form)
