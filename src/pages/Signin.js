import Login from '../components/Login'

function SigninPage() {
  const token = localStorage.getItem('access_token')
  if (token) {
    window.location.replace('/todo')
  }
  return (
    <>
      <Login />
    </>
  )
}

export default SigninPage
