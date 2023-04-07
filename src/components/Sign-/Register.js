import { Form, redirect, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import classes from './Sign.module.css'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [boolEmail, setBoolEmail] = useState(false)
  const [boolPassword, setBoolPassword] = useState(false)

  const navigate = useNavigate()

  //이메일이 올바른 형식으로 작성되었는지 확인하는 함수
  //@가 들어가면 해당 이메일은 올바른 형식으로 작성되었다고 간주한다.
  const checkEmail = (event) => {
    event.preventDefault()
    setEmail(event.target.value)
    if (event.target.value.includes('@')) {
      setBoolEmail(true)
    } else {
      setBoolEmail(false)
    }
  }

  //비밀번호가 올바른 형식으로 작성되었는지 확인하는 함수
  //8글자 이상 넘어가면 해당 비밀번호는 올바른 형식으로 작성되었다고 간주한다.
  const checkPassword = (event) => {
    event.preventDefault()
    setPassword(event.target.value)
    if (event.target.value.length >= 8) {
      setBoolPassword(true)
    } else {
      setBoolPassword(false)
    }
  }

  //회원가입을 취소하고 로그인을 하고싶다면 로그인 화면으로 보낸다.
  const goLogin = (event) => {
    event.preventDefault()
    navigate('/signin')
  }

  return (
    <Form method="POST" className={classes.form}>
      {/* 회원가입을 하면 서버에 요청을 보내는 Form컴포넌트 */}
      <input
        data-testid="email-input"
        type="email"
        name="email"
        value={email}
        placeholder="새 이메일"
        onChange={checkEmail}
      />
      <br></br>
      <input
        data-testid="password-input"
        type="password"
        name="password"
        value={password}
        placeholder="새 비밀번호"
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
      <button data-testid="signin-button" type="button" onClick={goLogin}>
        로그인
      </button>
    </Form>
  )
}

export default Register

//회원가입 정보를 보내는 action함수
export async function action({ request, params }) {
  const data = await request.formData()
  const method = request.method
  //Form으로 부터 데이터를 받아서 객체로 저장한다.
  const eventData = {
    email: data.get('email'),
    password: data.get('password'),
  }
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
  //올바른 요청이 아니면 null을 return해서 다시 입력해야 한다.
  if (!response.ok) {
    window.alert(response.status + ' 다시 가입해주세요.')
    return null
  }
  //완벽하게 보내졌으면 로그인 페이지로 이동한다.
  return redirect('/signin')
}
