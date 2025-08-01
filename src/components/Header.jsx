import { Link } from "react-router-dom"




const Header = () => {
  return (
    <nav>
      {/* <img src="" alt="Logo de la tienda" /> */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Register">Register</Link></li>
      </ul>
    </nav>
  )
}

export { Header }