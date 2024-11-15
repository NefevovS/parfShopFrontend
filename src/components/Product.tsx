import React from 'react';
import {Card} from "react-bootstrap";
import {useSelector, useStore} from "react-redux";

const Product = ({product}) => {

    return (
        <Card style={{width: '14rem',cursor:"pointer"}} className="shadow d-flex flex-column justify-content-center ">
            <Card.Img variant="top" src={product.img}/>
            <Card.Body>
                <Card.Title className='fw-bold'>{product.name}</Card.Title>
                <div>
                    <p className="d-block mb-1">{product.type}</p>
                    <p className="d-block mb-1">{product.brand}</p>
                    {product.discont ? <div className="d-flex gap-1 justify-content-center align-items-center mb-1">
                        <p className="d-block border rounded bg-dark p-1 text-white">-{product.discount}%</p>
                        <p className="text-decoration-line-through text-danger ">{product.price}</p>
                        <p className="fs-5">{product.price * (1 - product.discount / 100)}.-</p>
                    </div> : <p className="fs-5 d-inline-block w-100 text-center fw-bold mb-1">{product.price}.-</p>}

                </div>
            </Card.Body>
        </Card>


    );
};

export default Product;