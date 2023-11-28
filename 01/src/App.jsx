import { login } from './utils'
import './index.css'
import { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLogin, setIsLogin] = useState(false)

  const handleEmail = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  const handlePassword = (event) => {
    const { value } = event.target
    setPassword(value)
  }

  const handleSubmit = async () => {
    try {
      setError(null)
      setIsLogin(true)

      await login({ email, password })

      alert('Login efetuado com sucesso!!')
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLogin(false)
    }
  }

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && <div className="errorMessage">{error}</div>}
        <div className="row">
          <label htmlFor={'email'}>Email</label>
          <input
            id={'email'}
            type={'email'}
            autoComplete="off"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="row">
          <label htmlFor={'password'}>Password</label>
          <input
            id={'password'}
            type={'password'}
            value={password}
            onChange={handlePassword}
          />
        </div>

        <div className="button">
          <button
            disabled={email == '' || password.length < 6 || isLogin}
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
