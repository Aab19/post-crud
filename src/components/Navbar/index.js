import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {Box, Flex, Heading, Spacer, ButtonGroup, Button} from '@chakra-ui/react'
import CustomButton from '../Button'

const Navbar = () => {
  const router = useRouter()
  const {pathname, query, back} = router

  const routing = () => {
    switch (pathname) {
      case '/posts/add':
        return <CustomButton text="Back" onClick={() => back()} />
      case '/posts/[id]':
        return (
          <>
            <Link href="/">
              <CustomButton text="Back" />
            </Link>

            <Link href={`/posts/${query.id}/edit`}>
              <CustomButton text="Edit" />
            </Link>
            <Link href="/posts/add">
              <CustomButton text="Add Post" />
            </Link>
          </>
        )
      case '/posts/[id]/edit':
        return (
          <Link href={`/posts/${query.id}`}>
            <CustomButton text="Back" />
          </Link>
        )
      default:
        return (
          <Link href="/posts/add">
            <CustomButton text="Add Post" />
          </Link>
        )
    }
  }

  return (
    <Flex minWidth="max-content" alignItems="center" marginBottom={10} gap="2">
      <Box p="2">
        <Heading size="md">Post App</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">{routing()}</ButtonGroup>
    </Flex>
  )
}

export default React.memo(Navbar)
