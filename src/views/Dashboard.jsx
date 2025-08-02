import { Layout } from "../components/Layout"
import { useState } from "react"





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
    }

    const newProduct = {
      id: crypto.randomUUID(),
      name: name,
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

    console.log(data)


    setProduct(data)
    setName("")
    setPrice("")
    setDescription("")

  }

  return (
    <Layout>
      <section>
        <h1>Panel de administracion</h1>
      </section>
      <section>
        <h2>Agregar un nuevo producto</h2>
        <form onSubmit={handleNewProduct}>
          <div>
            <label >Nombre:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
            />
          </div>
          <div>
            <label >Descripcion:</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div>
            <label >Categoria:</label>
            <input
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </div>
          <button>Ingresar producto</button>
        </form>
        {
          error && <p>{error}</p>
        }

        {
          product && <div>
            <h2>{product.title}</h2>
            <img src={`${product.image}`} alt="Imagen del producto" />
            <p>{`$ ${product.price}`}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
          </div>
        }
      </section>
    </Layout>
  )


}



export { Dashboard }