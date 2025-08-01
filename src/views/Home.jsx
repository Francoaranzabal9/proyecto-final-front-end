import { Layout } from '../components/Layout'
import { useEffect, useState } from 'react'



const Home = () => {

  const [products, setProducts] = useState([])







  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => { fetchingProducts(), [] })

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
        <div>
          {
            products.map((product) => <div key={product.id}>
              <h2 key={product.id}>{product.title}</h2>
              <img src={product.image} alt={`Imagen de ${product.title}`} />
              <p>${product.price}</p>
              <p>{product.description}</p>
              <p><strong>{product.category}</strong></p>

            </div>)
          }
        </div>
      </section>
    </Layout>
  )

}



export { Home }