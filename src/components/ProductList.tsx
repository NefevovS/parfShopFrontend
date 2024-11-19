import React from 'react';
import ProductCard from "./ProductCard";
import {Container} from "react-bootstrap";

const ProductList = ({product}) => {


    return (
        <Container>
            <div className="d-flex m-5 flex-wrap gap-2 ">
                {product.map(p=><ProductCard product={p} key={p.id}/>)}
            </div>
        </Container>
    );
};

export default ProductList;