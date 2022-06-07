import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { persistCache } from 'apollo3-cache-persist'
import link from './middleware'

export const typeDefs = gql`
    directive @client on FIELD
`

export const getApolloClient = async (): Promise<ApolloClient<any>> => {

  const cache: InMemoryCache = new InMemoryCache({})

  await persistCache({
    cache,
    storage: window.localStorage,
    debug: process.env.NODE_ENV === 'development',
  })

  return new ApolloClient({
    link,
    cache,
    connectToDevTools: process.env.NODE_ENV === 'development',
    typeDefs,
  })
}
