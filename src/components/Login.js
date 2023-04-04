import { useState } from 'react'
import { useNavigate, redirect, Form } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [boolEmail, setBoolEmail] = useState(false)
  const [boolPassword, setBoolPassword] = useState(false)
  const navigate = useNavigate()

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

  const goRegister = (event) => {
    event.preventDefault()
    navigate('/signup')
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
        data-testid="signin-button"
        disabled={!boolEmail || !boolPassword}
        type="submit"
      >
        로그인
      </button>

      <button data-testid="signup-button" onClick={goRegister}>
        {' '}
        회원가입{' '}
      </button>
    </Form>
  )
}

export default Login

export async function action({ request, params }) {
  const data = await request.formData()
  const method = request.method
  const eventData = {
    email: data.get('email'),
    password: data.get('password'),
  }
  console.log(eventData)
  const response = await fetch(
    'https://www.pre-onboarding-selection-task.shop/auth/signin',
    {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    }
  )
  const resData = await response.json()
  const token = resData.access_token

  localStorage.setItem('access_token', token)
  return redirect('/todo')
}
