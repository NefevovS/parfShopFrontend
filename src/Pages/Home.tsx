import React from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import ProductList from "../components/ProductList";
import {useStore} from "react-redux";
import HomeCarousel from "../components/HomeCarousel";

const Home = () => {
    const store = useStore()
    const product = store.getState()
    return (
        <>
            <HomeCarousel/>
            <Container className="mt-4">
                <div className="my-4">
                    <p className="col-md-6 col-xs-12  d-inline-block">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Assumenda doloremque explicabo facilis
                        officiis? Blanditiis dolorem doloremque eligendi eos id illum, itaque minima nobis quasi qui
                        quisquam sunt veritatis voluptates. Dolores?</p>

                    <p className="col-md-6 col-xs-12 d-inline-block">
                        видео
                    </p>
                </div>

                <h2>
                    <Link to={"/catalog/new"} className="text-reset text-decoration-none">Новая коллекция</Link>

                </h2>
                <ProductList product={product}/>
                <h2>
                    <Link to={"/catalog/special/"} className="text-reset text-decoration-none">Специальное
                        предложение</Link>
                </h2>
                <ProductList product={product}/>
            </Container>
        </>

    );
};

export default Home;