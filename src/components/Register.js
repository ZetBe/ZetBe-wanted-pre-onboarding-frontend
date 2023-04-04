import { Form, redirect } from 'react-router-dom'
import { useState } from 'react'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [boolEmail, setBoolEmail] = useState(false)
  const [boolPassword, setBoolPassword] = useState(false)

  const checkEmail = (event) => {
    event.preventDefault()
    setEmail(event.target.value)
    if (event.target.value.includes('@')) {
      setBoolEmail(true)
    } else {
      setBoolEmail(false)
    }
  }

  const checkPassword = (event) => {
    event.preventDefault()
    setPassword(event.target.value)
    if (event.target.value.length >= 8) {
      setBoolPassword(true)
    } else {
      setBoolPassword(false)
    }
  }

  return (
    <Form method="POST">
      <input
        data-testid="email-input"
        type="email"
        name="email"
        value={email}
        onChange={checkEmail}
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        value={password}
        autoComplete="off"
        onChange={checkPassword}
      />

      <button
        data-testid="signup-button"
        disabled={!boolEmail || !boolPassword}
        type="submit"
      >
        {' '}
        회원가입{' '}
      </button>
    </Form>
  )
}

export default Register

export async function action({ request, params }) {
  const data = await request.formData()
  const method = request.method
  const eventData = {
    email: data.get('email'),
    password: data.get('password'),
  }
  console.log(eventData)
  const response = await fetch(
    'https://www.pre-onboarding-selection-task.shop/auth/signup',
    {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    }
  )
  if (!response.ok) {
    return
  }
  return redirect('/signin')
}
