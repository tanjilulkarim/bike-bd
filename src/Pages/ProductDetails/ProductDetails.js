import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import OrderForm from './OrderForm';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://tranquil-cove-79684.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        
    }, [id])
    return (
        <div className="my-section-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 text-center">
                    <div className="card my-card border-0" >
                     <div className="text-center">
                     <img src={product.img} className="card-img-top" alt="..."/>
                     </div>
                     <div className="card-body">
                       <h5 className="card-title">{product.name}</h5>
                       <p className="card-text">{product.dec}</p>
                       <h3 className="fw-light">$ {product.price}</h3>
                       </div>
                     </div>
                    </div>
                    <div className="col-lg-5">
                      <OrderForm product={product}></OrderForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;