import { redirect } from 'react-router-dom'

export function getAuthToken() {
  const token = localStorage.getItem('access_token')
  return token
}

export function loader() {
  return getAuthToken()
}

export function checkAuthLoader() {
  const token = getAuthToken()

  if (!token) {
    return redirect('/signin')
  }

  return null
}
