import { Layout } from "../components/Layout"
import { useState } from "react"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

import "../styles/login.css"


const Login = () => {

  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const { login } = useAuth()

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log("usuario logeado")
    const isLogin = await login(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
      navigate("/")
    }


  }



  return (
    <Layout>
      <section className="login-section">
        <div className="login-card">
          <form className="form-cont" onSubmit={handleLogin}>
            <h1>Bienvenido de vuelta</h1>
            <p>Por favor inicie sesion en su cuenta</p>
            <label >Nombre de usuario:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} />
            <label >Contraseña:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
            <button className="login-button">Ingresar</button>
            <div className="login-footer">
              <p>No tenes una cuenta?</p>
              <a><Link to="/register">Registrate</Link></a>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )


}



export { Login }