import React from 'react';
import {Container} from "react-bootstrap";
import {useStore} from "react-redux";
import ProductList from "../components/ProductList";

const NoteListPage = () => {

    const store = useStore()
    const product = store.getState()
    return (
        <Container className="p-5">
            <ProductList product={product}/>
        </Container>
    );

};

export default NoteListPage;