import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"



const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }


  return (
    <nav>
      {/* <img src="" alt="Logo de la tienda" /> */}
      <ul>
        {
          user && <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/AboutUs">Sobre Nosotros</Link></li>
            <button onClick={handleLogout}>Cerrar sesion</button>
          </div>
        }
        {
          !user && <div>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
            <li><Link to="/AboutUs">Sobre Nosotros</Link></li>
          </div>
        }
      </ul>
    </nav>
  )
}

export { Header }