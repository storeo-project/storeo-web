import React from 'react'
import Wrapper from '../components/Wrapper'
import StyledButton from '../components/StyledButton'
import { useKeycloak } from '../keycloak/web'

const Top = () => {
  const { keycloak } = useKeycloak()

  const logout = <StyledButton onClick={() => {
    keycloak.logout()
  }}>
    Logout
  </StyledButton>

  return (
    <Wrapper>
      {logout}
    </Wrapper>
  )
}

export default Top
