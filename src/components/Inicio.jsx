import { Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import Products from "./Products"

function Inicio() {

    const [ products, setProducts ] = useState([])
  
  useEffect(() => {

    getProducts()

  },[])

  const getProducts = async () => {
    try {

    const productsJson = process.env.JSON_PATH_INICIO
    // ./../../public/products.json
    setProducts(productsJson)
    
        
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
      <Container className="container-product mt-5">
        <Products
        products={products}
        />
      </Container>
    </div>
  )
}

export default Inicio
