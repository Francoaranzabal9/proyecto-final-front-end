import { Layout } from "../components/Layout"
import { useState } from "react"

import "../styles/dashboard.css"




const Dashboard = () => {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [product, setProduct] = useState("")
  const [error, setError] = useState("")

  const handleNewProduct = async (e) => {
    e.preventDefault()
    setError("")

    if (!name || !description || !price) {
      setError("Debes completar todos los campos.")
      return
    }

    if (name.length < 3) {
      setError("El nombre debe contener al menos 3 caracteres.")
      return
    }

    if (isNaN(price)) {
      setError("El precio deben ser numeros.")
      return
    }

    if (Number(price) <= 0) {
      setError("El precio no puede ser menor o igual a 0.")
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: category,
      image: image
    }

    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })


    const data = await response.json()


    setProduct(data)
    setName("")
    setImage("")
    setPrice("")
    setDescription("")
    setCategory("")
  }

  return (
    <Layout>
      <section className="form-section">
        <h1>Panel de administración</h1>
        <div className="dashboard-form-cont">
          <h2>Agregar un nuevo producto</h2>
          <form onSubmit={handleNewProduct}>
            <div>
              <label >Nombre del producto:</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Ingrese el nombre del producto"
              />
            </div>
            <div>
              <label >Imagen:</label>
              <input
                type="text"
                placeholder="Ingrese la URL de la imagen"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </div>
            <div>
              <label >Precio:</label>
              <input
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Ingrese el precio del producto"
              />
            </div>
            <div>
              <label >Descripción:</label>
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Ingrese la descrpicion del producto"
              />
            </div>
            <div>
              <label >Categoria:</label>
              <input
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                placeholder="Ingrese la categoria del producto"
              />
            </div>
            {
              error && <p className="error">{error}</p>
            }
            <button>Ingresar producto</button>
          </form>
          {
            product && <div className="products-grid">
              <div className="product-card">
                <h2>{product.title}</h2>
                <img src={`${product.image}`} alt="Imagen del producto" />
                <p>{`$ ${product.price}`}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
              </div>
            </div>
          }
        </div>
      </section>
    </Layout>
  )


}



export { Dashboard }