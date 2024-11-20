import './App.css'
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import ProductListPage from "./Pages/ProductListPage";
import Contacts from "./Pages/Contacts";
import Shops from "./Pages/Shops";
import Admin from "./Pages/Admin";
import Auth from "./Pages/Auth";
import Special from "./Pages/Special";
import New from "./Pages/New";
import Cart from "./Pages/Cart";
import BrandList from "./Pages/BrandList";
import Product from "./Pages/Product";
import NoteListPage from "./Pages/NoteListPage";
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar/>

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/catalog" element={<BrandList/>}/>
                        <Route path="/catalog/brand/:brandId" element={<ProductListPage/>}/>
                        <Route path="/catalog/:id" element={<Product/>}/>
                        <Route path="/catalog/new" element={<New/>}/>
                        <Route path="/catalog/special" element={<Special/>}/>
                        <Route path="/notes/:id" element={<NoteListPage/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/shops" element={<Shops/>}/>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/auth" element={<Auth/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>


                <Footer/>

            </BrowserRouter>

        </>
    )
}

export default App
