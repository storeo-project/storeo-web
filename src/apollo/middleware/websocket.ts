import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'

const ssl = process.env.REACT_APP_GRAPHQL_SSL
const host = process.env.REACT_APP_GRAPHQL_HOST
const port = process.env.REACT_APP_GRAPHQL_PORT
const version = process.env.REACT_APP_GRAPHQL_VERSION
const route = process.env.REACT_APP_GRAPHQL_ROUTE

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${ssl ? 'wss' : 'ws'}://${host}:${port}/${version}/${route}`,
  }),
)

export default wsLink
