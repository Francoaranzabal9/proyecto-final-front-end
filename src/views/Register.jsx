import { Layout } from "../components/Layout"
import { useState } from "react"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"



const Register = () => {


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const { register } = useAuth()

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

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
      setError("El nombre de usuario debe contener al menos 3 caracteres.")
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
      <section>
        <h1>Registrese</h1>
      </section>
      <section>
        <form onSubmit={handleRegister}>
          <div>
            <label >Nombre de usuario:</label>
            <input type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} />
          </div>
          <div>
            <label >Correo electronico:</label>
            <input type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
          </div>
          <div>
            <label >Contraseña:</label>
            <input type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </div>
          <button>Registrarse</button>
        </form>

        {
          error && <p>{error}</p>
        }

        {
          success && <p>{success}</p>
        }
      </section>
    </Layout>
  )


}



export { Register }