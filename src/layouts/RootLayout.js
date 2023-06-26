import PropTypes from 'prop-types'
import {Box, Container} from '@chakra-ui/react'

import Navbar from 'components/Navbar'

const Layout = ({children}) => {
  return (
    <Box>
      <Container maxW="container.sm" py={8}>
        <Navbar />
        {children}
      </Container>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
