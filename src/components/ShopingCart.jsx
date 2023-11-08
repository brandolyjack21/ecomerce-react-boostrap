import Minicart from "./Minicart";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function ShopingCart({ position }) {
  const shopingCartValue = useSelector((state) => state.car.value);
  const [viewCar, setViewCar] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect( () => {
    
    if (!viewCar) {
       setViewCar(position);
       getPricesInCar()
    }
  }, [position]);

  const getPricesInCar = () => {
    let newtotalPrice = 0;
    shopingCartValue.map((product) => {
      newtotalPrice += product.precio;
    });
    setTotalPrice(newtotalPrice);
  };

  return (
    <div>
      <section className={viewCar ? "canvas" : "canvasoff"}>
        <section className={viewCar ? "canvas-products" : "canvas-productoff"}>
          <section className="title-cart">
            <h4>Tus compras</h4>
            <button style={{ width:"max-content", height:"max-content", border:"none", padding:"0 5px" }} onClick={() => setViewCar(!viewCar)}><i class='bx bx-x'></i></button>
          </section>
          <section className="body-cart">
            {shopingCartValue.map((products) => (
              <div key={products?.id} className="container-minicart">
                <div className="minicart">
                <div className="container-img-minicart">
                  <img src={products?.image} alt={products?.nombre} />
                </div>
                <div className="container-description-minicart">
                  <div className="title-minicart">{products?.nombre}</div>
                  <div style={{ display:"flex", justifyContent:"end", padding:"5px 0", paddingRight:"30px" }}>{ products?.precio }</div>
                  <Minicart
                    products={products}
                  />
                </div>
               </div>
              </div>
            ))}
          </section>
          <section className="footer-minicart" style={{ width: "100%" }}>
            <section>
              Productos(<span>{shopingCartValue.length}</span>)
            </section>
            <section>
              Total: $<span>{totalPrice}</span> Dolares
            </section>
            <Button style={{ width: "100%", margin: "10px 0" }}>
              Continuar compra
            </Button>
          </section>
        </section>
      </section>
    </div>
  );
}

export default ShopingCart;
