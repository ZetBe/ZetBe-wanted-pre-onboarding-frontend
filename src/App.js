import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'
import TodoPage, { loader as todoLoader } from './pages/Todo'
import HomePage from './pages/Home'
import { action as signinAction } from './components/Login'
import { action as signupAction } from './components/Register'
const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'signup', element: <SignupPage />, action: signupAction },
      { path: 'signin', element: <SigninPage />, action: signinAction },
      { path: 'todo', element: <TodoPage />, loader: todoLoader },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
