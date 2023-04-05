import { Suspense } from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'

function TodoPage() {
  if (!localStorage.getItem('access_token')) {
    window.location.replace('/signin')
  }

  const removeToken = () => {
    localStorage.removeItem('access_token')
  }

  const data = useLoaderData()

  return (
    <>
      <Link onClick={removeToken} to="/signin">
        로그아웃
      </Link>
      <TodoForm method="POST" />
      <Suspense>
        <Await resolve={data.todos}>
          {(loadData) => <TodoList todos={loadData} />}
        </Await>
      </Suspense>
    </>
  )
}

export default TodoPage

async function loadTodos() {
  const token = localStorage.getItem('access_token')
  if (!token) {
    window.location.replace('/signin')
  }
  const response = await fetch(
    'https://www.pre-onboarding-selection-task.shop/todos',
    {
      method: 'GET',
      headers: { Authorization: `bearer ${token}` },
    }
  )

  const resData = await response.json()
  return resData
}

export async function loader() {
  return defer({
    todos: await loadTodos(),
  })
}
