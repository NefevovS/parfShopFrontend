import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/logo.svg"

const NavBar = () => {
    const [isAuth,setIsAuth]=useState(true)

    return (<nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/shops" >Салон</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/catalog">Каталог</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contacts">Контакты</Link>
                        </li>
                    </ul>

                    {isAuth?(<ul className="navbar-nav d-flex gap-3 ">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/admin" >Админ</Link>
                        </li>
                        <li className="nav-item wrapper">
                            <Link aria-current="page" to="/cart" ><img src="/cart.svg" height={"40px"} width={"40px"}/>

                            </Link>
                            <span className="text-wrap text-center text-white lh-1" >2</span>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/auth">Выйти</Link>
                        </li>
                    </ul>):(<ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/auth" >Зарегистрироваться</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/auth">Войти</Link>
                        </li></ul>)}

                </div>
            </div>
        </nav>
    )

}

export default NavBar;