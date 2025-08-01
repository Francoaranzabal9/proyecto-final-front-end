import { Layout } from '../components/Layout'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/UserContext'



const Home = () => {

  const [products, setProducts] = useState([])
  const [showPopup, setShowPopUp] = useState(null)
  const [productToEdit, setProductToEdit] = useState(null)
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")
  const [search, setSearch] = useState("")


  const { user } = useAuth()

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchingProducts()
  }
    , [])

  const handleOpenEdit = (product) => {
    setShowPopUp(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      image: imageEdit
    }

    const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    })

    if (response.ok) {
      const data = await response.json()
      setProducts(prevProduct =>
        prevProduct.map((product) =>
          product.id === productToEdit.id
            ? data
            : product
        ))
    }

    setShowPopUp(null)
  }
  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    if (response.ok) {
      setProducts(prevProduct => prevProduct.filter((product) => product.id != id))
    }


  }
  //Funcion para controlar el input de busqueda
  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
  }




  return (
    <Layout>
      <section>
        <h1>Bienvenido a Tu Tienda Virtual</h1>
        <p>Los mejores productos al mejor precio, ¡directo a tu casa!</p>
        <h2>¿Por qué elegirnos?</h2>
        <p>
          En nuestra tienda encontrarás calidad, confianza y precios increíbles.
          Nos apasiona ofrecerte lo mejor para que tu experiencia de compra sea rápida,
          sencilla y segura. ¡Descubrí todo lo que tenemos para vos!
        </p>
        <input
          type="text"
          placeholder='Buscar producto...'
          value={search}
          onChange={handleSearch}
        />
        <div>
          {
            showPopup && <section>
              <h2>Editando producto.</h2>
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  placeholder='Ingrese el nombre del producto'
                  value={titleEdit}
                  onChange={(e) => setTitleEdit(e.target.value)}
                />
                <input
                  type="text"
                  placeholder=''
                  value={priceEdit}
                  onChange={(e) => setPriceEdit(e.target.value)}
                />
                <textarea
                  placeholder='ingrese la descripcion del producto'
                  value={descriptionEdit}
                  onChange={(e) => setDescriptionEdit(e.target.value)}
                />
                <input
                  type="text"
                  placeholder='Ingrese la categoria del producto'
                  value={categoryEdit}
                  onChange={(e) => setCategoryEdit(e.target.value)}
                />
                <input
                  type="text"
                  placeholder='Ingrese la URL de la imagen'
                  value={imageEdit}
                  onChange={(e) => setImageEdit(e.target.value)}
                />
                <button>Actualizar</button>
              </form>

              <button onClick={() => setShowPopUp(null)}>Cerrar</button>

            </section>
          }
          {
            products
              .filter((product) => product.title.toLowerCase()
                .includes(search.toLowerCase()))
              .map((product) => <div key={product.id}>
                <h2 key={product.id}>{product.title}</h2>
                <img src={product.image} alt={`Imagen de ${product.title}`} />
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p><strong>{product.category}</strong></p>
                {
                  user && <div>
                    <button onClick={() => handleOpenEdit(product)}>Actualizar</button>
                    <button onClick={() => handleDelete(product.id)}>Borrar</button>
                  </div>
                }
              </div>)

          }
        </div>
      </section>
    </Layout>
  )

}



export { Home }