import { Form, redirect, useNavigation, NavLink } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import classes from './Todo.module.css'

function TodoForm({ method }) {
  const [input, setInput] = useState('')

  //Todo를 추가하는 항목에 문자를 입력 하면
  //입력할 때 마다 값을 넣어준다.
  const changeHandler = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }

  //입력을 마치고 idle상태가 될때
  //값을 추가하는 input태그에 값을 없앤다.
  const navigation = useNavigation()
  useEffect(() => {
    if (navigation.state === 'idle') {
      setInput('')
    }
  }, [navigation.state])

  //로그아웃 버튼을 누를 경우, 토큰을 없앤다.
  const removeToken = () => {
    localStorage.removeItem('access_token')
  }
  return (
    <>
      {/*새로운 todo값을 넣는 Form컴포넌트 */}
      <Form method={method} className={classes.form}>
        <input
          data-testid="new-todo-input"
          type="text"
          name="todo"
          value={input}
          onChange={changeHandler}
        />
        <button data-testid="new-todo-add-button">추가</button>
      </Form>
      {/*로그아웃 하는 링크 */}
      <NavLink onClick={removeToken} to="/signin" className={classes.logout}>
        로그아웃
      </NavLink>
    </>
  )
}

export default TodoForm

export async function action({ request }) {
  const data = await request.formData()
  const method = request.method
  const token = localStorage.getItem('access_token')

  let eventData = ''
  let response = ''

  if (method === 'POST') {
    eventData = {
      todo: data.get('todo'),
      isCompleted: data.get('isCompleted'),
    }
    response = await fetch(
      'https://www.pre-onboarding-selection-task.shop/todos',
      {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      }
    )
  } else if (method === 'PUT') {
    eventData = {
      todo: data.get('todo'),
      isCompleted: JSON.parse(data.get('isCompleted')),
    }
    response = await fetch(
      'https://www.pre-onboarding-selection-task.shop/todos/' + data.get('id'),
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      }
    )
    window.location.reload()
  } else if (method === 'DELETE') {
    response = await axios.delete(
      'https://www.pre-onboarding-selection-task.shop/todos/' + data.get('id'),
      { method: 'DELETE', headers: { Authorization: `bearer ${token}` } }
    )
  }
  if (!response.ok && method !== 'DELETE') {
    window.alert(response.status + ' 잘못된 요청')
    return null
  }
  return redirect('/todo')
}
