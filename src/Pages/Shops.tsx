import React from 'react';
import { Container} from "react-bootstrap";

const Shops = () => {
    return <Container className="p-5 d-flex flex-column align-items-center height_container">
        <div>
            <img src="salon1.jpg" alt="salon" className="rounded w-auto img-fluid"/>
            <h3 className='m-4'>
                Контактная информация
            </h3>
            <table className="m-4 table-sm">
                <tbody>
                <tr>
                    <th>Адресс</th>
                    <td>Санкт-Петербург, Строителей , д. 38</td>
                </tr>
                <tr>
                    <th>Телефон</th>
                    <td><a href="tel:+75555555">+7 444 44 44</a></td>
                </tr>
                <tr>
                    <th>Режим работы</th>
                    <td>Ежедневно с 10:00 до 22:00</td>
                </tr>
                </tbody>
            </table>
        </div>


    </Container>

};

export default Shops;