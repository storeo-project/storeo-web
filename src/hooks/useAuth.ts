import { useEffect, useState } from 'react'

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'))
  const [token, setToken] = useState(null)

  useEffect(() => {
    const value = localStorage.getItem('token')
    const storedValue = value ? JSON.parse(value) : {}
    setIsAuth(!!storedValue.token)
    setToken(storedValue.token)
  })

  return { isAuth, token }
}
