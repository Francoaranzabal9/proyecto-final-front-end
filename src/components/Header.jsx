import { Link } from "react-router-dom"




const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/"></Link></li>
        <li><Link to="/Dashboard"></Link></li>
        <li><Link to="/Login"></Link></li>
        <li><Link to="/Register"></Link></li>
      </ul>
    </nav>
  )
}

export { Header }