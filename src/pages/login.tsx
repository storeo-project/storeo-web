import { NextPage } from 'next'
import { AuthProviders, useWunderGraph } from '../components/generated/nextjs'
import Head from 'next/head'
import { Wrapper } from '../components/commons/wrapper'
import { useAuth } from '../components/auth/auth-provider'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'antd'
import { Loading } from '../components/commons/loading'
import { useSelector } from 'react-redux'
import { selectUser } from '../app/store/slices/profile'

const Login: NextPage = () => {
  const { getRedirect, clearRedirect } = useAuth()
  const user = useSelector(selectUser)

  const { login } = useWunderGraph()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      const redirect = getRedirect()
      if (redirect) {
        router.push(redirect).then(clearRedirect)
      } else {
        router.push('/')
      }
    }
  }, [router, getRedirect, clearRedirect, user])

  if (!user) {
    return (
      <>
        <Head>
          <title>PMS Login</title>
        </Head>
        <Wrapper>
          <Button type={'primary'} onClick={() => login(AuthProviders.storeo)}>
            Login
          </Button>
        </Wrapper>
      </>
    )
  } else {
    return <Loading />
  }
}

export default Login
