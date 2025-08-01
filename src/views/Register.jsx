import { Layout } from "../components/Layout"
import { useState } from "react"



const Register = () => {


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")



  const handleRegister = (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos.")
      return
    }

    if (username.length < 3) {
      setError("El nombre de usuario debe contener al menos 3 caracteres.")
      return
    }

    const newUser = {
      username,
      password,
      email
    }


    setSuccess("El usuario ha sido registrado con exito.")

    setUsername("")
    setPassword("")
    setEmail("")

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