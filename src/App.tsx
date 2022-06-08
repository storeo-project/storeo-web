import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import routes from './route'
import { Route } from 'react-router'
import NotFound from './pages/NotFound'
import { Container } from 'semantic-ui-react'

const App: React.FC<any> = () => {
  return (
    <Container>
      <Router>
        <Routes>
          {routes.map(({ component, path }) => {
            return (
              <Route
                path={path}
                key={path}
                element={
                  component
                }
              />
            )
          })}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
