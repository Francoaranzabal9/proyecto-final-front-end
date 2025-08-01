import { Link } from "react-router-dom"
import { Login } from "../views/Login"




const Header = () => {
  return (
    <nav>
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