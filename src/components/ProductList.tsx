import React from 'react';
import Product from "./Product";
import {Container} from "react-bootstrap";
import {useStore} from "react-redux";

const ProductList = () => {
    const store = useStore()
    const product = store.getState()

    return (
        <Container>
            <div className="d-flex m-5 flex-wrap gap-2 ">
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
            </div>


        </Container>
    );
};

export default ProductList;