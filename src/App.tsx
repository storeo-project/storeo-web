import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import routes from './route'
import { Route } from 'react-router'
import RoutePublic from './component/route/RoutePublic'
import RoutePrivate from './component/route/RoutePrivate'
import NotFound from './pages/NotFound'
import { Container } from 'semantic-ui-react'

const App: React.FC<any> = () => {
  return (
    <Container>
      <Router>
        <Routes>
          {routes.map(({ component, path, isPublic }) => {
            return (
              <Route
                path={path}
                key={path}
                element={
                  isPublic ? (
                    <RoutePublic isAuthenticated={false}>{component}</RoutePublic>
                  ) : (
                    <RoutePrivate isAuthenticated={false}>{component}</RoutePrivate>
                  )
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
