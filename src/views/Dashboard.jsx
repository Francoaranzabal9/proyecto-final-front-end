import { Layout } from "../components/Layout"





const Dashboard = () => {
  return (
    <Layout>
      <section>
        <h1>Panel de administracion</h1>
      </section>
      <section>
        <h2>Agregar un nuevo producto</h2>
        <form>
          <div>
            <label >Nombre:</label>
            <input type="text" />
          </div>
          <div>
            <label >Descripcion:</label>
            <input type="text" />
          </div>
          <div>
            <label >Precio:</label>
            <input type="text" />
          </div>
          <button>Ingresar producto</button>
        </form>
      </section>
    </Layout>
  )


}



export { Dashboard }