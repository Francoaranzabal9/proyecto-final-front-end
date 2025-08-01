import { Footer } from "./Footer"
import { Header } from "./Header"





const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Layout>
          {props.children}
        </Layout>
      </main>
      <Footer />
    </>

  )
}


export { Layout }