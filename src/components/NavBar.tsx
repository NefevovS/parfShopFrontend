import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (<nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="logo.svg" alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/shops" >Салоны</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/catalog">Каталог</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contacts">Контакты</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/admin" >Админ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/auth">Войти</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;