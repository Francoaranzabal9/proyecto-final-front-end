import { Layout } from "../components/Layout"





const Login = () => {
  return (
    <Layout>
      <section>
        <h1>Inicia sesion</h1>
      </section>
      <section>
        <form>
          <div>
            <label >Nombre de usuario:</label>
            <input type="text" />
          </div>
          <div>
            <label >Contraseña:</label>
            <input type="password" />
          </div>
          <button>Ingresar</button>
        </form>
      </section>
    </Layout>
  )


}



export { Login }