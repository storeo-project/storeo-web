import { useAuth } from './auth-provider'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Loading } from '../commons'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/store/slices/profile'

const AuthGuard = ({children}) => {
  const {setRedirect} = useAuth()
  const user = useSelector(selectUser)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login').then(() => {
        setRedirect(router.route)
      })
    }
  }, [router, user, setRedirect])

  if (user) {
    return <>{children}</>
  } else {
    return <Loading/>
  }
}

export default AuthGuard
