import { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import TodoList from '../components/Todo-/TodoList'
import TodoForm from '../components/Todo-/TodoForm'

function TodoPage() {
  const token = localStorage.getItem('access_token')
  //가끔 잘못된 로그인으로 인해 token에 undefined값이 할당되는 경우도 있는데,
  //이를 막기 위해 조건문에서 걸러준다.
  if (!token || token === 'undefined') {
    window.location.replace('/signin')
  }

  const data = useLoaderData()

  return (
    <>
      <h1>Todo</h1>
      <TodoForm method="POST" />
      {/*Suspense컴포넌트를 통해 데이터도 출력되기 전 무언가를 보여준다. */}
      <Suspense fallback={<p>데이터 불러오는 중...</p>}>
        <Await resolve={data.todos}>
          {(loadData) => <TodoList todos={loadData} />}
        </Await>
      </Suspense>
    </>
  )
}

export default TodoPage
// Todo명단 불러오는 함수

async function loadTodos() {
  //토큰을 로컬 저장소에서 가져온 뒤
  const token = localStorage.getItem('access_token')
  if (!token) {
    window.location.replace('/signin')
  }
  //fetch를 통해 token을 보낸다.
  const response = await fetch(
    'https://www.pre-onboarding-selection-task.shop/todos',
    {
      method: 'GET',
      headers: { Authorization: `bearer ${token}` },
    }
  )
  //잘못된 요청이라면
  if (!response.ok) {
    //아무것도 보내지 않는다.
    window.alert(response.status + ' 잘못된 요청')
    return null
  }

  const resData = await response.json()
  return resData
}

export async function loader() {
  //defer함수와 Await컴포넌트를 통해 fetch외의 나머지 요소들만 먼저 렌더링되고
  //fetch된 데이터들은 출력되는 시간 상 나중에 출력한다.
  return defer({
    todos: await loadTodos(),
  })
}
