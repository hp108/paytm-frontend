import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path:'/signup',
      element:<Signup></Signup>
    },
    {
      path:'/signin',
      element:<Signin></Signin>
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>
    },
    {
      path:'/send',
      element:<SendMoney></SendMoney>
    },
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
