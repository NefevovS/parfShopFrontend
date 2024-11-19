import React from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import ProductList from "../components/ProductList";
import {useStore} from "react-redux";

const Home = () => {
    const store = useStore()
    const product = store.getState()
    return (<Container className="p-5">
        <h2>
            <Link to={"/catalog/new"} className="text-reset text-decoration-none">Новая коллекция</Link>

        </h2>
        <ProductList product={product}/>
        <h2>
            <Link to={"/catalog/special/"} className="text-reset text-decoration-none">Специальное предложение</Link>

        </h2>
        <ProductList product={product}/>


    </Container>);
};

export default Home;