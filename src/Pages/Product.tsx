import React from 'react';
import {Link, useParams} from "react-router-dom"
import {useStore} from "react-redux";
import {Button, Container} from "react-bootstrap";

const Product = () => {
    const {id} = useParams()
    const store = useStore()
    const product = store.getState().find((p)=>p.id==id)
    return (
        <Container className="d-flex justify-content-between p-5">
            <div sm={4}>
                <img src={product.img} alt="productImage" style={{width: "350px"}}/>
            </div>
            <div sm={8}>
                <p className="fw-bold">{product.name}</p>
                <p className="fw-bold">{product.type}</p>
                <div className="d-flex gap-5 align-items-center">
                    <div className="fw-bold fs-5 align-middle">{product.price}.-</div>
                    <form action="POST">
                        <Button className="text-bg-dark">Купить</Button>
                    </form>
                </div>

                <div>
                    {product.description.map(i => <p>{i.description}</p>)}
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
                        <dt>Ноты:</dt>
                        <div className="d-flex flex-wrap gap-1 w-50">
                            {product.notes.map(i =>
                                <dt>
                                    <Link to={`/notes/${i.id}`}>
                                        <span className="badge text-bg-dark ">{i.name}</span>
                                    </Link>
                                </dt>)}
                        </div>

                    </dl>

                </div>

            </div>

        </Container>
    );
};

export default Product;