import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function TodoForm({ method }) {
  const [input, setInput] = useState('')
  const changeHandler = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }
  const navigation = useNavigation()
  useEffect(() => {
    if (navigation.state === 'idle') {
      setInput('')
    }
  }, [navigation.state])
  return (
    <Form method={method}>
      <input
        data-testid="new-todo-input"
        type="text"
        name="todo"
        value={input}
        onChange={changeHandler}
      />
      <button data-testid="new-todo-add-button">추가</button>
    </Form>
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

  console.log(response)
  return redirect('/todo')
}
