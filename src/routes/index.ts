import Login from '../pages/Login'
import Top from '../pages/Top'
import Home from '../pages/Home'
import RenderProps from '../pages/RenderProps'

export default [
  {
    path: '/',
    component: Top,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: false,
  },
  {
    path: '/renderProps',
    component: RenderProps,
    isPublic: false,
  },
]
