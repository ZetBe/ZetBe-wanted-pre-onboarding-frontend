import Register from '../components/Register'

function SignupPage() {
  const token = localStorage.getItem('access_token')
  if (token) {
    window.location.replace('/todo')
  }
  return <Register />
}

export default SignupPage
