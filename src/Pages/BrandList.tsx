import React from 'react';
import {Container} from "react-bootstrap";
import {useStore} from "react-redux";
import ProductList from "../components/ProductList";
import {Link} from "react-router-dom";

const BrandList = () => {

    const brands = [
        {id: 1, name: "Agatho"},
        {id: 2, name: "AL HARAMAIN"},
        {id: 3, name: "Berdoues"},
        {id: 4, name: "Blend Oud"},
        {id: 5, name: "Cera di Cupra"},
        {id: 6, name: "Ciro"},
        {id: 7, name: "David Jourquin"},
        {id: 8, name: "Genyum"},
        {id: 9, name: "YeYe"},
        {id: 10, name: "Tree of Life"},
        {id: 11, name: "The Harmonist"},
        {id: 12, name: "SYNONYME"},
        {id: 13, name: "Regalien"},
        {id: 14, name: "Royal Fragrances"},
        {id: 15, name: "PERFUME CULT"},
        {id: 16, name: "Paolo Gigli"},
        {id: 17, name: "OMNIA"},]

    return (
        <Container>
            <div className="d-flex flex-column flex-wrap vh-100">
                {brands
                    .sort((a, b) => {
                        const nameA = a.name.toUpperCase();
                        const nameB = b.name.toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    })
                    .map(brand => <Link to={`brand/${brand.id}`} key={brand.id}
                                        className="text-reset text-decoration-none text-underline-hover p-2 m-2">{brand.name}</Link>)}
            </div>

        </Container>
    );
};

export default BrandList;