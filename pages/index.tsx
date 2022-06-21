import React from 'react'
import type { NextPage } from 'next'
import { AuthProviders, useMutation, useQuery, useWunderGraph, withWunderGraph } from '../components/generated/nextjs'

const Home: NextPage = () => {
  const { user, login, logout } = useWunderGraph()
  const { result: me } = useQuery.me()
  const { result: deleteResult, mutate: deleteOrganization } = useMutation.deleteOrganization()
  const { result: createResult, mutate: createOrganization } = useMutation.updateOrganization()

  return (
    <div>
      <button onClick={() => login(AuthProviders.storeo)}>Login</button>
      <button onClick={() => logout({
        logout_openid_connect_provider: true,
      })}>Logout
      </button>
      {user && (<button onClick={async () => {
        await deleteOrganization({ input: { id: 18 } })
      }}>Delete Org
      </button>)}
      {user && (<button onClick={async () => {
        await createOrganization({ input: { id: 20, name: '111111', description: '22222' }})
      }}>Create Org
      </button>)}

      {deleteResult.status === 'error' && (
        <div>
          <h1> delete error: {deleteResult.errors[0].message} </h1>
        </div>
      )}
      {createResult.status === 'error' && (
        <div>
          <h1> create error: {createResult.errors[0].message} </h1>
        </div>
      )}
      {user && me.status === 'ok' && (
        <div>
          <h1> firstName: {me.data.user?.firstName} </h1>
          <h1> lastName: {me.data.user?.lastName} </h1>
        </div>
      )}
      {user && me.status === 'error' && (
        <div>
          <h1> error: {me.errors[0].message} </h1>
        </div>
      )}
      {!user && (
        <h1>Please login</h1>
      )}
    </div>
  )
}

export default withWunderGraph(Home)
