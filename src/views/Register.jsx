import { Layout } from "../components/Layout"
import { useState } from "react"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

import "../styles/Register.css"


const Register = () => {


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [lengthError, setLengthError] = useState("")
  const [success, setSuccess] = useState("")
  const { register } = useAuth()

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLengthError("")

    const newUser = {
      username: username,
      email: email,
      password: password
    }

    const isRegister = await register(newUser)

    if (!username || !email || !password) {
      setError("Debes completar todos los campos.")
      return
    }

    if (username.length < 3) {
      setLengthError("El nombre de usuario debe contener al menos 3 caracteres.")
      return
    }

    console.log(newUser)

    if (isRegister) {
      setUsername("")
      setPassword("")
      setEmail("")
      navigate("/")
    }

  }

  return (
    <Layout>
      <section className="register-section">
        <div className="register-card">
          <form className="form-cont" onSubmit={handleRegister}>
            <h1>Crea un usuario</h1>
            <p>Descubre todo lo que tenemos para vos</p>
            <label >Nombre de usuario:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} />
            {
              lengthError && <p className="error"> {lengthError}</p>
            }
            <label >Correo electronico:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
            <label >Contraseña:</label>
            <input type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
            {
              error && <p className="error">{error}</p>
            }
            <button className="register-button">Registrarse</button>
            <div className="register-footer">
              <p>Ya tenes una cuenta?</p>
              <Link to="/Login">Inicia Sesion</Link>
            </div>
          </form>
        </div>

        {
          success && <p>{success}</p>
        }
      </section>
    </Layout>
  )


}



export { Register }