import Login from 'pages/Login'
import Top from 'pages/Top'

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
]
