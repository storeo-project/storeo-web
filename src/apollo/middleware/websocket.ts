import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'

const ssl = JSON.parse(process.env.REACT_APP_GRAPHQL_SSL ? process.env.REACT_APP_GRAPHQL_SSL : 'false')
const host = process.env.REACT_APP_GRAPHQL_HOST
const port = process.env.REACT_APP_GRAPHQL_PORT
const version = process.env.REACT_APP_GRAPHQL_VERSION
const route = process.env.REACT_APP_GRAPHQL_ROUTE


const wsLink = new GraphQLWsLink(
  createClient({
    url: `${ssl ? 'wss' : 'ws'}://${host}:${port}/${version}/${route}`,
    connectionParams: async () => {
      const token = localStorage.getItem('storeo-token')
      return {
        headers: {
          authorization: token ? `Bearer ${token}` : '',
          'x-hasura-role': 'admin',
        },
      }
    },
  }),
)

export default wsLink
