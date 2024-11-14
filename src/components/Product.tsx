import React from 'react';
import {Card} from "react-bootstrap";
import {useSelector, useStore} from "react-redux";

const Product = ({product}) => {

    return (
        <Card style={{width: '18rem',cursor:"pointer"}} className="shadow d-flex flex-column justify-content-center ">
            <Card.Img variant="top" src={product.img}/>
            <Card.Body>
                <Card.Title className='fw-bold'>{product.name}</Card.Title>
                <Card.Text>
                    <p>{product.type}</p>
                    <p>{product.brand}</p>
                    {product.discont ? <div className="d-flex gap-1 justify-content-center align-items-center ">
                        <b className="d-block border rounded bg-dark p-1 text-white">-{product.discount}%</b>
                        <b className="text-decoration-line-through text-danger ">{product.price}</b>
                        <b className="fs-5">{product.price * (1 - product.discount / 100)}.-</b>
                    </div> : <p className="fs-5 d-inline-block w-100 text-center fw-bold">{product.price}.-</p>}

                </Card.Text>
            </Card.Body>
        </Card>


    );
};

export default Product;