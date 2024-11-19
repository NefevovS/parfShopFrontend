import React from 'react';
import ProductList from "../components/ProductList";
import {useStore} from "react-redux";
import product from "./Product";
import {Container} from "react-bootstrap";

const Catalog = () => {
    const store = useStore()
    const product = store.getState()
    return (
        <Container className="p-5">
            <ProductList product={product}/>
        </Container>
    );
};

export default Catalog;