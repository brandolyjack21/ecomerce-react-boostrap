import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import {useDispatch } from "react-redux";
import { removeToCar } from "../features/addCar";

function Minicart({ products}) {

    const dispatch = useDispatch()
    
  const [countProduct, setCountProduct] = useState(0);
  return (
    <div key={products?.id}>
      <div className="body-minicart">
        <div className="container-button-minicart">
          <div className="container-buttons-minicart">
            <Button key={products?.id} variant="dark" onClick={() => setCountProduct(countProduct + 1)}><i class='bx bx-plus' ></i></Button>
            <div className="countProduct">{countProduct}</div>
            <Button variant="dark" onClick={() => countProduct === 0 ? setCountProduct(countProduct): setCountProduct(countProduct - 1)}><i class='bx bx-minus'></i></Button>
          </div>
        </div>
        <div onClick={() => {dispatch(removeToCar(products?.id))}} className="tacho-minicart"><i class='bx bxs-trash'></i></div>
      </div>
    </div>
  );
}

export default Minicart;
