import Register from '../components/Sign-/Register'

function SignupPage() {
  const token = localStorage.getItem('access_token')
  //Todo 컴포넌트와 반대로 token값이 있으면서 undefined가 아닌 값을 가지면
  //로그인 한것으로 간주하여 todo 페이지로 이동한다.
  if (token !== 'undefined' && token) {
    window.location.replace('/todo')
  }
  return (
    <>
      <h1>회원가입</h1>
      <Register />
    </>
  )
}

export default SignupPage
