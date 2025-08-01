import { Layout } from "../components/Layout"
import { useState } from "react"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"




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
      <section>
        <h1>Inicia sesion</h1>
      </section>
      <section>
        <form onSubmit={handleLogin}>
          <div>
            <label >Nombre de usuario:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} />
          </div>
          <div>
            <label >Contraseña:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </div>
          <button>Ingresar</button>
        </form>
      </section>
    </Layout>
  )


}



export { Login }