import React from 'react';
import ProductList from "../components/ProductList";
import {useStore} from "react-redux";
import {Container} from "react-bootstrap";
import Product from "./Product";

const ProductListPage = () => {
    const store = useStore()
    const product = store.getState()
    console.log(product)
    return (
        <Container className="p-5">
            <ProductList product={product}/>
        </Container>
    );
};

export default ProductListPage;