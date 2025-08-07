import { Layout } from "../components/Layout"
import "../styles/aboutus.css"
import objectiveImg from "../assets/objective.jpg"

const AboutUs = () => {
  return (
    <Layout>
      <section className="proyect-section">
        <div className="card">
          <div className="text-cont">
            <h2>De qué trata el proyecto</h2>
            <p>
              Este proyecto consiste en una tienda virtual que permite a los usuarios registrarse, iniciar sesión
              y acceder a un panel privado para la gestión de productos.
              El objetivo es simular el funcionamiento de un e-commerce sencillo con autenticación y rutas protegidas.
            </p>
          </div>
        </div>
      </section>

      <section className="objetive-section">
        <div className="objective-cont">
          <div className="objective-image">
            <img src={objectiveImg} alt="Imagen de seccion" />
          </div>
          <div className="objective-card">
            <div className="text-cont">
              <h2>A quién está dirigido</h2>
              <p>
                La aplicación está dirigida a estudiantes, desarrolladores y cualquier persona interesada en aprender
                cómo se construye una tienda virtual desde cero. Los usuarios pueden explorar productos, crear una cuenta, iniciar sesión y gestionar su catálogo, disfrutando así de una experiencia e-commerce completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tec-section">
        <div className="tec-card">
          <div className="tec-text-cont">
            <h2>Tecnologías y enfoques usados</h2>
            <p>
              Para la construcción del proyecto se utilizaron las siguientes tecnologías:
            </p>
          </div>
          <div className="tecnologies">
            <div className="tecnology">
              <img src=" https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" alt="" />
              <p>React: para la creación de interfaces dinámicas y el manejo del estado.</p>
            </div>
            <div className="tecnology">
              <img src="  https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="logo de html" />
              <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="logo de css" />
              <p>HTML y CSS: para la estructura y diseño base de la aplicación.</p>
            </div>
            <div className="tecnology">
              <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="logo de javascript" />
              <p>JavaScript: para la lógica de interacción y validaciones.</p>
            </div>
            <div className="tecnology">
              <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" alt="logo de react" />
              <p>Git: para el control de versiones y la colaboración en el desarrollo.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export { AboutUs }
