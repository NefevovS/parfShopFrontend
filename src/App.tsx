import './App.css'
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Contacts from "./Pages/Contacts";
import Shops from "./Pages/Shops";
import Admin from "./Pages/Admin";
import Auth from "./Pages/Auth";
import Product from "./Pages/Product";

function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/catalog/:id" element={<Product/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/shops" element={<Shops/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>

            </BrowserRouter>

        </>
    )
}

export default App
