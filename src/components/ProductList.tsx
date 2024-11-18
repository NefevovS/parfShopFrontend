import React from 'react';
import ProductCard from "./ProductCard";
import {Container} from "react-bootstrap";
import {useStore} from "react-redux";

const ProductList = () => {
    const store = useStore()
    const product = store.getState()

    return (
        <Container>
            <div className="d-flex m-5 flex-wrap gap-2 ">
                <ProductCard product={product}/>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
            </div>


        </Container>
    );
};

export default ProductList;