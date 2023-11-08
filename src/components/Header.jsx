import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShopingCart from './ShopingCart';


function Header() {

  const countProducts = useSelector(state => state.car.value)
  const [ position, setPosition ] = useState(false)

  return (
    <div className='container-position'>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} bg="primary" data-bs-theme="dark" className="bg-body-tertiary mb-0">
          <Container fluid >
            <Navbar.Brand href="/">CasaTech</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link style={{ display:"flex", alignItems:"center" }} href="#action1">Inicio</Nav.Link>
                  <Nav.Link className='cart-count' style={{ fontSize:"25px", alignItems:"center" }} href="#action2" onClick={() => setPosition(!position)}><i class='bx bx-cart'><div className={ countProducts.length === 0 ? "count-products count-products-visible":"count-products" }>{ countProducts.length }</div></i></Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <ShopingCart
      position={ position }
      />
    </div>
  )
}

export default Header
