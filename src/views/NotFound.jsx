import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"





const NotFound = () => {
  return (
    <Layout>
      <div>
        <h1>404</h1>
        <p>La página que buscas no existe.</p>
        <a><Link to="/">Volver al inicio</Link></a>
      </div>
    </Layout>
  )
}



export { NotFound }