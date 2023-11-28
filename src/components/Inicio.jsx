import { Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import Products from "./Products"
import ProductsJson from './../../public/products.json'

function Inicio() {

    const [ products, setProducts ] = useState([])
  
  useEffect(() => {

    getProducts()

  },[])

  const getProducts = async () => {
    try {
    setProducts(ProductsJson)
    
        
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
