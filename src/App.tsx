import './App.css'
import Product from "./components/Product";
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";

function App() {
    const product=useSelector(state=>state)
    console.log(product)

    return (
        <>
            <Container >
                <div className="d-flex justify-content-between m-5 flex-wrap gap-2 ">
                    <Product product={product}/>

                </div>


            </Container>

        </>
    )
}

export default App
