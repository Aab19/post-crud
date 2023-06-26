import {ChakraProvider} from '@chakra-ui/react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import Layout from '../layouts/RootLayout'
import '../styles/globals.css'

const queryClient = new QueryClient()

export default function App({Component, pageProps}) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
