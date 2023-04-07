import { Link } from 'react-router-dom'

function ErrorPage() {
  //todo나 signup이나 signin이 아닌 다른 라우트로 이동하면
  //해당 컴포넌트가 나온다.
  //메인 페이지로 가게끔 링크를 걸어서 유도를 한다.
  return (
    <>
      <h1>Wrong Page</h1>
      <p>check your address</p>
      <Link to="/">go to main page</Link>
    </>
  )
}

export default ErrorPage
