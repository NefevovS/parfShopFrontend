import React from 'react';
import ProductList from "../components/ProductList";
import {useStore} from "react-redux";
import {Container} from "react-bootstrap";

const Special = () => {
    const store = useStore()
    const product = store.getState()
    return (
        <Container className="p-5">
            <ProductList product={product}/>
        </Container>
    );
};

export default Special;