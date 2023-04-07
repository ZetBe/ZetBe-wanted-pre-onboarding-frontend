import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'
import TodoPage, { loader as todoLoader } from './pages/Todo'
import HomePage from './pages/Home'
import { action as signinAction } from './components/Sign-/Login'
import { action as signupAction } from './components/Sign-/Register'
import { action as todoAction } from './components/Todo-/TodoForm'
import ErrorPage from './pages/Error'
const router = createBrowserRouter([
  {
    path: '/',
    //잘못된 경로로 이동할 경우 해당 컴포넌트로 이동
    errorElement: <ErrorPage />,
    children: [
      //기본 홈페이지
      {
        index: true,

        element: <HomePage />,
      },
      //회원가입 페이지
      { path: 'signup', element: <SignupPage />, action: signupAction },
      //로그인 페이지
      { path: 'signin', element: <SigninPage />, action: signinAction },
      //todo 페이지
      {
        path: 'todo',
        element: <TodoPage />,
        loader: todoLoader,
        action: todoAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
