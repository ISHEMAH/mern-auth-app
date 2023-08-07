import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Username from './components/Username'
import Password from './components/Password'
import Register from './components/Register'
import Profile from './components/Profile'
import Recovery from './components/Recovery'
import Reset from './components/Reset'
import PageNotFound from './components/PageNotFound'

const router = createBrowserRouter([
  {
    path:'/',
    element : <Username/>
  },
  {
    path:'/register',
    element : <Register/>
  },
  {
    path:'/password',
    element : <Password/>
  },
  {
    path:'/Profile',
    element : <Profile/>
  },
  {
    path:'/recovery',
    element : <Recovery/>
  },
  {
    path:'/reset',
    element : <Reset/>
  },
  {
    path:'*',
    element : <PageNotFound/>
  },
])

const App = () => {
  return (
    <div>
    <RouterProvider router={router}>
      <h1 class="text-3xl text-black font-bold underline">
    Hello world!
  </h1>
    </RouterProvider>
      
    </div>
  )
}

export default App
