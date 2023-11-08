import React from "react";
import Header from "../../components/Header";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function PageProduct() {
  const parametro = useParams();
  const id = parametro.id
  const productsInCar = useSelector((state) => state.car.value);
  const [products, setProducts] = useState("");
  const [ count, setCount ] = useState(0);

  const getOneProduct = async () => {
    const res = await fetch("../../../public/products.json");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getOneProduct();
  }, []);

  return (
    <>
      <section className="container container-page-productOne">
        { 
          [products?.productos?.find(elemento => elemento.id === Number(parametro.id))].map(product => (
            <section className="container-product-page">
        <div class="container-image-product">
            <img src={ product?.image }
                alt=""/>
        </div>
        <div className="container-description-product">
            <div className="description-product">
                <div className="container-h1-product-page">
                    <h1>{ product?.nombre } { product?.marca }</h1>
                </div>
                <div className="container-icon-start-qualify">
                    <i className='bx bx-star'></i><i className='bx bx-star'></i><i className='bx bx-star'></i><i
                        className='bx bx-star'></i><i className='bx bx-star'></i><span> | puede agregar una reseña</span>
                </div>
                <div className="price-product-page">
                    ${ product?.precio }
                </div>
                <div className="description-product-page">
                    { product?.descripcion }
                </div>
                <div className="container-model-and-category">
                    <div className="product-page-model">
                        Modelo: <strong>{ product?.modelo }</strong>
                    </div>
                    <div className="product-page-category">
                        Categoria: <strong>{ product?.nombre }</strong>
                    </div>
                </div>
            </div>
            <div className="container-buttons-product-page">
                <div className="buttons-product-page">
                    <div className="button-minus-product-page" onClick={() => count < 1 ? setCount(count): setCount(count - 1)}>
                        <i className='bx bx-minus'></i>
                    </div>
                    <div className="count-product-page">
                        { count }
                    </div>
                    <div className="button-plus-product-page" onClick={() => setCount(count + 1)}>
                        <i className='bx bx-plus'></i>
                    </div>
                    <section className="button-add-cart">
                        <i className='bx bx-cart-download'></i>Añadir al carrito
                    </section>
                </div>
            </div>
            <div className="container-social-networks">
                <div className="container-social-networks">
                    <div>
                        <i className='bx bxl-facebook-circle' ></i>
                    </div>
                    <div>
                        <i className='bx bxl-twitter' ></i>
                    </div>
                    <div>
                        <i className='bx bxl-linkedin' ></i>
                    </div>
                    <div>
                        <i className='bx bxl-gmail' ></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
          ))     
        }
        <section class="gallery-container">
        <ul class="gallery">
          {
            products.productos?.map(product => (
              <li class="list-gallery">
                <section class="container-image-gallery">
                    <img src={ product.image } alt=""/>
                </section>
                <section class="container-description-gallery">
                    <h4 class="title-gallery">{ product.nombre }</h4>
                    <span class="description-gallery">
                        { product.descripcion }
                    </span>
                </section>
            </li>
            ))
          }
            
        </ul>
    </section>
      </section>
      <Header />
    </>
  );
}

export default PageProduct;
