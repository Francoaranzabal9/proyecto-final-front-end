import { Layout } from "../components/Layout"
import "../styles/aboutus.css"

const AboutUs = () => {
  return (
    <Layout>
      <section>
        <h2>De qué trata el proyecto</h2>
        <p>
          Este proyecto consiste en una tienda virtual que permite a los usuarios registrarse, iniciar sesión
          y acceder a un panel privado para la gestión de productos.
          El objetivo es simular el funcionamiento de un e-commerce sencillo con autenticación y rutas protegidas.
        </p>
      </section>

      <section>
        <h2>A quién está dirigido</h2>
        <p>
          La aplicación está dirigida a estudiantes, desarrolladores y cualquier persona interesada en aprender
          cómo se construye una tienda virtual desde cero, aplicando conceptos de frontend, manejo de usuarios
          y seguridad básica mediante rutas privadas.
        </p>
      </section>

      <section>
        <h2>Tecnologías y enfoques usados</h2>
        <p>
          Para la construcción del proyecto se utilizaron las siguientes tecnologías:
        </p>
        <ul>
          <li>React: para la creación de interfaces dinámicas y el manejo del estado.</li>
          <li>HTML y CSS: para la estructura y diseño base de la aplicación.</li>
          <li>JavaScript: para la lógica de interacción y validaciones.</li>
          <li>Git: para el control de versiones y la colaboración en el desarrollo.</li>
        </ul>
      </section>
    </Layout>
  )
}

export { AboutUs }
