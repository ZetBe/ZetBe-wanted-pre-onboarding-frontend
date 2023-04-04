import { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import TodoList from '../components/TodoList'
import { getAuthToken } from './util/auth'

function TodoPage() {
  const data = useLoaderData()
  return (
    <Suspense>
      <Await resolve={data.todos}>
        {(loadData) => <TodoList todos={loadData} />}
      </Await>
    </Suspense>
  )
}

export default TodoPage

async function loadTodos() {
  const token = getAuthToken()
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
