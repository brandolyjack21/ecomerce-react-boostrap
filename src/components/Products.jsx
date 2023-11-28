import Badge from 'react-bootstrap/Badge';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCar } from "../features/addCar";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


function Products({ products }) {
  // console.log(products,"22222222");
  const dispatch = useDispatch()
  return (
    <>
      {products?.productos?.map((producto) => (
        <Card key={producto?.id} style={{ width: "18rem", marginTop:"20px", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
          <Link to={`products/${ producto?.id }`}>
          <Card.Img variant="top" src={ producto?.image } style={{ height:"286px", overflow:"auto" }} />
          </Link>
          <Card.Body>
            <Card.Title>{ producto?.nombre }</Card.Title>
            <Card.Text>{ producto?.descripcion }</Card.Text>
            <section style={{ display:"flex", flexDirection:"column", gap:"10px"}}>
            <Button variant="primary" style={{ padding:"5px 10px" }} onClick={ () =>  dispatch(addToCar(producto))}>Agregar al carrito</Button>
              <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
              <span className="visually-visible" style={{ marginRight:"10px" }}>
                ${ producto?.precio }
              </span>
            <Button variant="ligth">Disponibles:
              <Badge bg="secondary" style={{ marginLeft:"5px" }}>
                { producto?.cantidad }
              </Badge>
            </Button>
              </div>
            </section>
          </Card.Body>
        </Card>
      ))} 
    </>
  );
}

export default Products;
