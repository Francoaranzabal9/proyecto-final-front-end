import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"

import "../styles/header.css"



const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }


  return (
    <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/"><img src="https://idaliadigital.com/wp-content/uploads/2023/02/tiendas-online-profesionales.png" alt="Logo de la tienda" /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {
              user && <>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Dashboard">Dashboard</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/AboutUs" >Sobre nosotros</Link>
                </li>
                <button onClick={handleLogout}>Cerrar sesion</button>
              </>
            }
            {
              !user && <>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Login">Iniciar sesion</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Register">Registrarse</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/AboutUs" >Sobre nosotros</Link>
                </li>
              </>
            }

          </ul>
        </div>
      </div>
    </nav>
  )
}

export { Header }