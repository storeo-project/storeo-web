import React, { createContext } from 'react'
import Keycloak from 'keycloak-js'

export type AuthProviderProps = {
  client: Keycloak
  children?: React.ReactNode
}

export type IAuthContextProps = {
  client?: Keycloak,
  initialized: boolean,
  token: string,
}

export const AuthContext = createContext<IAuthContextProps>({
  initialized: false,
  token: '',
})

export function createAuthProvider() {

  const initialState = {
    initialized: false,
    token: '',
  }

  return class KeycloakProvider extends React.PureComponent<AuthProviderProps> {

    state = {
      ...initialState,
    }

    componentDidMount() {
      this.init()
    }

    componentDidUpdate({
      client: prevAuthClient,
    }: AuthProviderProps) {
      const { client } = this.props
      if (client !== prevAuthClient) {
        this.setState({ ...initialState })
        this.init()
      }
    }

    init() {
      const { client } = this.props
      client.init({
        onLoad: 'login-required',
      }).then(authenticated => {
        if (authenticated) {
          this.setState({
            client: client,
            initialized: true,
            token: client.token,
          })
          if (client.token) {
            localStorage.setItem('storeo-token', client.token)
          }
        }
      })
    }

    render() {
      const { children, client } = this.props
      const { initialized, token } = this.state

      return (
        <AuthContext.Provider value={{ initialized, client, token }}>
          {children}
        </AuthContext.Provider>
      )
    }
  }
}

export const ReactKeycloakProvider = createAuthProvider()
