import { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState(null)
  const { storedValue } = useLocalStorage('token', '')

  useEffect(() => {
    setIsAuth(!!storedValue)
    setToken(storedValue)
  })

  return { isAuth, token }
}
