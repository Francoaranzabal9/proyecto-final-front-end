import { Layout } from "../components/Layout"




const Register = () => {
  return (
    <Layout>
      <section>
        <h1>Registrese</h1>
      </section>
      <section>
        <form>
          <div>
            <label >Nombre de usuario:</label>
            <input type="text" />
          </div>
          <div>
            <label >Correo electronico:</label>
            <input type="email" />
          </div>
          <div>
            <label >Contraseña:</label>
            <input type="password" />
          </div>
          <button>Registrarse</button>
        </form>
      </section>
    </Layout>
  )


}



export { Register }