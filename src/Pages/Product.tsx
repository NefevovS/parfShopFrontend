import React from 'react';
import {Link, useParams} from "react-router-dom"
import {useStore} from "react-redux";
import {Container} from "react-bootstrap";

const Product = () => {
    const {id} = useParams()
    const store = useStore()
    const product = store.getState()
    console.log(product)
    return (
        <Container className="d-flex justify-content-between">
            <div sm={4}>
                <img src={product.img} alt="productImage" style={{width:"350px"}}/>
            </div>
            <div sm={8} >
                <p className="fw-bold">{product.name}</p>
                <p className="fw-bold">{product.type}</p>
                <p className="fw-bold">{product.price}.-</p>

                <p>{product.brand}</p>
                <div>
                    {product.description.map(i => <p>{i.description}</p>)}
                </div>
                <div>
                    {product.notes.map(i => <p>{i.name}</p>)}
                </div>

                <div>
                    <dl>
                        {product.productInfo.map(i => <>
                            <dt>
                                {i.title}:
                            </dt>
                            <dd>
                                {i.description}
                            </dd>
                        </>)}
                        <div>Ноты:</div>
                        {product.notes.map(i =>
                        <div>
                            <Link to={`/notes/${i.id}`} >
                                {i.name}
                            </Link>
                        </div>)}
                    </dl>

                </div>

            </div>

        </Container>
    );
};

export default Product;