import { NavLink } from 'react-router-dom'

function HomePage() {
  //page폴더에서는 HomePage컴포넌트만 css를 적용시키므로
  //jsx내부에 넣는 것으로 간단하게 처리했다.
  return (
    <>
      <h1 style={{ marginBottom: '30%' }}>홈페이지</h1>
      <NavLink
        to="/todo"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? '1000' : '',
            color: isPending ? 'red' : 'black',
            display: 'block',
            fontSize: '30px',
          }
        }}
      >
        todo로 이동하기(로그인 하지 않았으면 로그인 페이지로 이동합니다.)
      </NavLink>
      <br></br>
      <NavLink
        to="/signin"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isPending ? 'red' : 'black',
            display: 'block',
            marginBottom: '130%',
            fontSize: '30px',
          }
        }}
      >
        signin 하기(로그인 했으면 todo 페이지로 이동합니다.)
      </NavLink>
    </>
  )
}

export default HomePage
