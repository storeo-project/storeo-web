import React from 'react'
import Wrapper from '../components/Wrapper'
import StyledButton from '../components/StyledButton'
import { gql, useSubscription } from '@apollo/client'
import { Table } from 'semantic-ui-react'
import { useKeycloak } from '../keycloak/useKeycloak'

const Top = () => {
  const TEST_SUBSCRIPTION = gql`
      subscription MyQuery {
          user {
              id
              email
              username
          }
      }
  `

  const { data, error } = useSubscription(
    TEST_SUBSCRIPTION,
  )

  console.log(error)

  const { keycloak, token } = useKeycloak()

  console.log(token)

  const logout = <StyledButton onClick={() => {
    keycloak.logout()
  }}>
    Logout
  </StyledButton>

  const table = data ?
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.user?.map((item: any) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.email}</Table.Cell>
            <Table.Cell>{item.username}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table> : <Table striped></Table>

  return (
    <Wrapper>
      {logout}
      {table}
    </Wrapper>
  )
}

export default Top
