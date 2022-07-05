import React, { ReactElement, useContext, useEffect } from 'react'
import { WunderGraphContext } from '../generated/nextjs'
import { setUser } from '../../app/store/slices/profile'
import { useDispatch } from 'react-redux'

const redirectKey = 'pms_redirect'

export interface AuthContextType {
  setRedirect: (redirect: string) => void
  getRedirect: () => string | null
  clearRedirect: () => void
}

export const AuthContext = React.createContext<AuthContextType>(undefined)

AuthContext.displayName = 'AuthContext'

export function useAuth() {
  const auth = React.useContext(AuthContext)

  if (!auth) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return auth
}

export function AuthProvider({ children }: { children: ReactElement }) {
  const { client } = useContext(WunderGraphContext)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      const result = await client.query(
        {
          operationName: 'me',
          requiresAuthentication: true,
        },
        {}
      )
      if (result.status === 'ok') {
        dispatch(setUser((result.data as any).user))
      }
    }
    fetchUser().catch(console.error)
  }, [client, dispatch])

  const value = {
    setRedirect: redirect => {
      window.sessionStorage.setItem(redirectKey, redirect)
    },
    getRedirect: () => {
      return window.sessionStorage.getItem(redirectKey)
    },
    clearRedirect: () => {
      return window.sessionStorage.removeItem(redirectKey)
    },
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
