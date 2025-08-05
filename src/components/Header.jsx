import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"



const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }


  return (

    <nav>
      {<img src="https://idaliadigital.com/wp-content/uploads/2023/02/tiendas-online-profesionales.png" alt="Logo de la tienda" />}
      <ul>
        {
          user && <div>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/AboutUs">Sobre Nosotros</Link></li>
            <button onClick={handleLogout}>Cerrar sesion</button>
          </div>
        }
        {
          !user && <div>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Login">Iniciar sesion</Link></li>
            <li><Link to="/Register">Registrarse</Link></li>
            <li><Link to="/AboutUs">Sobre Nosotros</Link></li>
          </div>
        }
      </ul>
    </nav>
  )
}

export { Header }