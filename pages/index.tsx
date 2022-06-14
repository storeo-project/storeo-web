import React from 'react'
import type { NextPage } from 'next'
import { AuthProviders, useLiveQuery, useWunderGraph, withWunderGraph } from '../components/generated/nextjs'

const Home: NextPage = () => {
  const { result: hello } = useLiveQuery.Hello()
  const { user, login, logout } = useWunderGraph()

  return (
    <div>
      <button onClick={() => login(AuthProviders.storeo)}>Login</button>
      <button onClick={() => logout({
        logout_openid_connect_provider: true,
      })}>Logout
      </button>
      <h1>Hello WunderGraph! {user?.user_id}</h1>
      {user?.user_id && hello.status === 'ok' && hello.data.findUsers.length > 0 && (
        <div>
          {hello.data.findUsers.map(message => {
            return (<div key={message.id}>
              <p>
                id: {message.id}, email: {message.email}, name: {message.username}
              </p>
            </div>)
          })}
        </div>
      )}
      {user?.user_id && hello.status === 'error' && (
        <div>
          {hello.errors.map(value => {
            return (<div key={value.message}>
              <p>
                message: {value.message}, path: {value.path}
              </p>

            </div>)
          })}
        </div>
      )}
    </div>
  )
}

export default withWunderGraph(Home)