import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { persistCache } from 'apollo3-cache-persist'
import link from './middleware'
import { setContext } from '@apollo/client/link/context'

export const typeDefs = gql`
    directive @client on FIELD
`

export const getApolloClient = async (): Promise<ApolloClient<any>> => {

  const cache: InMemoryCache = new InMemoryCache({})

  const authLink = setContext((_, { headers }) => {
    const value = localStorage.getItem('token')
    const token = value ? JSON.parse(value) : {}
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  await persistCache({
    cache,
    storage: window.localStorage,
    debug: process.env.NODE_ENV === 'development',
  })

  return new ApolloClient({
    link: authLink.concat(link),
    cache,
    connectToDevTools: process.env.NODE_ENV === 'development',
    typeDefs,
  })
}
