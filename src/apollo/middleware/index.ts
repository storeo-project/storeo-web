import { ApolloLink, split } from '@apollo/client'
import httpLink from './http'
import wsLink from './websocket'
import { getMainDefinition } from '@apollo/client/utilities'

const link: ApolloLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    )
  },
  wsLink,
  ApolloLink.from([
    httpLink,
  ]),
)

export default link
