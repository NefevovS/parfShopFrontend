import React from 'react';
import {Container} from "react-bootstrap";

const Contacts = () => {
    return (<Container className="p-5 d-flex flex-column height_container" style={{"margin-top":"-50px"}}>
            <h1 >Контактные данные</h1>
            <div className="d-flex mb-5 gap-2">
                <div>e-mail:</div>
                <a href="mailto:internet@perfumeshop.ru" className="text-reset text-decoration-none">internet@perfumeshop.ru</a>
            </div>
            <h3>Интернет-салон</h3>
            <div className="d-flex mb-5 gap-2">
                <div> Телефон:</div>
                <a href="tel:+75555555" className="text-reset text-decoration-none">+7 555 55 55</a>
            </div>
            <h3 className="mb-5">
                Наши салоны:
            </h3>
            <h5>
                Санкт-Петербург
            </h5>
            <table className="m-4 table-sm">
                <tbody>
                <tr>
                    <th>Адресс</th>
                    <td>Санкт-Петербург, Строителей , д. 38</td>
                </tr>
                <tr>
                    <th>Телефон</th>
                    <td><a href="tel:+75555555" className="text-reset text-decoration-none">+7 444 44 44</a></td>
                </tr>
                <tr>
                    <th>Режим работы</th>
                    <td>Ежедневно с 10:00 до 22:00</td>
                </tr>
                </tbody>
            </table>
        </Container>);
};

export default Contacts;