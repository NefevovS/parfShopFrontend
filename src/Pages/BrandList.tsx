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

    const alphabetBrends = new Set()
    const letterArray = brands.map(brand => brand.name.substring(0, 1))

    let sortedArray = letterArray.sort((a, b) => a.localeCompare(b))

    sortedArray.forEach((i)=>alphabetBrends.add(i))
    sortedArray=[];

    alphabetBrends.forEach(i=>sortedArray.push(i))

    return (
        <Container>
            <ul className="d-flex flex-column flex-wrap vh-100 m-5 gap-4">
              {sortedArray.map(letter =><li>
                  <h3>{letter}</h3>
                  <ul>
                      {
                        brands.map(i=>i.name.substring(0,1)===letter?<li>{i.name}</li>:null)
                      }
                  </ul>

              </li>)}
            </ul>

        </Container>
    );
};

export default BrandList;