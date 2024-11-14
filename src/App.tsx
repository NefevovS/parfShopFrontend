import './App.css'
import Product from "./components/Product";
import {Container} from "react-bootstrap";

function App() {
    const product={
        name:"SILENO / Силен",
        price:38000,
        type:"Духи",
        brand:"AGATHO",
        img:"agatho1.png",
        discont:30,
    }

    return (
        <>
            <Container >
                <div className="d-flex justify-content-between m-5 flex-wrap gap-2 ">
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>

                </div>


            </Container>

        </>
    )
}

export default App
