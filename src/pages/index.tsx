import React from 'react'
import type { NextPage } from 'next'
import AuthGuard from '../components/auth/auth-guard'
import { Wrapper } from '../components/commons/wrapper'
import { useWunderGraph } from '../components/generated/nextjs'
import Head from 'next/head'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUser } from '../app/store/slices/profile'
import { Client } from '../components/generated/wundergraph.client'
import { wrapper } from '../app/store'

const Home: NextPage = () => {
  const { logout } = useWunderGraph()
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <AuthGuard>
      <Head>
        <title>PMS Home</title>
      </Head>
      <Wrapper>
        <h1>Logged as: {user?.email}</h1>
        <Button
          type={'primary'}
          danger
          onClick={() =>
            logout({
              logout_openid_connect_provider: true,
            }).then(() => dispatch(setUser(null)))
          }>
          Logout
        </Button>
      </Wrapper>
    </AuthGuard>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ctx => {
    const client = new Client()
    const cookieHeader = ctx.req?.headers.cookie
    if (typeof cookieHeader === 'string') {
      client.setExtraHeaders({
        Cookie: cookieHeader,
      })
    }
    const result = await client.query.me({})
    if (result.status === 'ok') {
      store.dispatch(setUser(result.body.data.user))
    }
    return {
      props: {},
    }
  }
)

export default Home
