import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"

import notFoundImg from "../assets/not-found-img.png"

import "../styles/notfound.css"

const NotFound = () => {
  return (
    <Layout>
      <section className="not-found-section">
        <div className="not-found-cont">
          <img src={notFoundImg} alt="Imagen 404" />
          <div className="not-found-text">
            <h1>404</h1>
            <p><strong>No podemos encontrar la página que estás buscando.</strong></p>
            <p>Puede que haya expirado, o podría haber un error de escritura. Tal vez puedas encontrar lo que necesitas desde nuestra página principal.</p>
            <Link className="not-found-link" to="/">Volver al inicio</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}



export { NotFound }