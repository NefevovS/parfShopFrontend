import React from 'react';
import {useStore} from "react-redux";
import ProductList from "../components/ProductList";
import {Container} from "react-bootstrap";

const New = () => {
    const store = useStore()
    const product = store.getState()
    return (
        <Container className="p-5">
            <h2 className="text-reset text-decoration-none">
              Новая коллекция
            </h2>
            <ProductList product={product}/>
        </Container>
    );
};

export default New;