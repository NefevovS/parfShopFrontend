import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import {useStore} from "react-redux";


const Cart = () => {
    const product = [
        {
            product:
                {
                    id: 1,
                    name: "SILENO / Силен",
                    price: 38000,
                    type: "Духи",
                    brand: "AGATHO",
                    img: "../.././agatho1.png",
                    description: [{
                        id: 1,
                        description: "По садам и цитрусовым рощам Помпеи Силен бродит и поет свои песни. Легким шагом, с едкой улыбкой он шевелит листья апельсиновых деревьев. Нежные цветы опадают и излучают свежие зеленые ноты."
                    }, {
                        id: 2,
                        description: "Это места «отиума» и медитации, где пьяный старый Силен передает своей музыкой и песнями янтарное звучание своих древних путешествий по Средиземноморью, отражая образы восточных земель нотами сычуаньского перца, иланг-иланга и ностальгического морского аккорда."
                    }, {
                        id: 3,
                        description: "Миф питается природой, а природа хранит миф в лесу ароматом цветов и фруктов."
                    }, {
                        id: 4,
                        description: "Силен — мудрец, презирающий земные блага, считающийся провидцем, открывающим будущее только по принуждению. Из его рассказов появляются выброшенные на берег леса, покрытые водорослями и солоноватой водой по утрам. Фантастические жизненные истории, сотканные из звуков, запахов и вкусов беззаботности, вина с ароматом ценных пород дерева и кедрового дерева."
                    },

                    ],
                    discount: 30,
                    notes: [{id: 1, name: "драгоценное дерево"}, {id: 2, name: "иланг-иланг"}, {id: 3, name: "кедр"}, {
                        id: 4, name: "морские ноты"
                    }, {id: 5, name: "перец Сычуань"}, {id: 6, name: "фрукты"}, {id: 7, name: "цветочные ноты"},],
                    productInfo: [{id: 1, title: "Страна", description: "Италия"}, {
                        id: 2, title: "Объем", description: "100 мл"
                    }, {id: 3, title: "Аромат", description: "Для всех"},]

                },
            quantity: 1
        },
        {
            product:
                {
                    id: 1,
                    name: "SILENO / Силен",
                    price: 38000,
                    type: "Духи",
                    brand: "AGATHO",
                    img: "../.././agatho1.png",
                    description: [{
                        id: 1,
                        description: "По садам и цитрусовым рощам Помпеи Силен бродит и поет свои песни. Легким шагом, с едкой улыбкой он шевелит листья апельсиновых деревьев. Нежные цветы опадают и излучают свежие зеленые ноты."
                    }, {
                        id: 2,
                        description: "Это места «отиума» и медитации, где пьяный старый Силен передает своей музыкой и песнями янтарное звучание своих древних путешествий по Средиземноморью, отражая образы восточных земель нотами сычуаньского перца, иланг-иланга и ностальгического морского аккорда."
                    }, {
                        id: 3,
                        description: "Миф питается природой, а природа хранит миф в лесу ароматом цветов и фруктов."
                    }, {
                        id: 4,
                        description: "Силен — мудрец, презирающий земные блага, считающийся провидцем, открывающим будущее только по принуждению. Из его рассказов появляются выброшенные на берег леса, покрытые водорослями и солоноватой водой по утрам. Фантастические жизненные истории, сотканные из звуков, запахов и вкусов беззаботности, вина с ароматом ценных пород дерева и кедрового дерева."
                    },

                    ],
                    discount: 30,
                    notes: [{id: 1, name: "драгоценное дерево"}, {id: 2, name: "иланг-иланг"}, {id: 3, name: "кедр"}, {
                        id: 4, name: "морские ноты"
                    }, {id: 5, name: "перец Сычуань"}, {id: 6, name: "фрукты"}, {id: 7, name: "цветочные ноты"},],
                    productInfo: [{id: 1, title: "Страна", description: "Италия"}, {
                        id: 2, title: "Объем", description: "100 мл"
                    }, {id: 3, title: "Аромат", description: "Для всех"},]

                },
            quantity: 2
        }
    ]


    return (
        <Container>
            <h1 className="m-2">Корзина</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Название</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Cтоимость</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {
                    product.map(pr =>
                        <tr >

                            <td scope="row">
                                <img src={pr.product.img} alt="product" style={{"width": "62px"}}/>
                            </td>

                            <td className=" w-50 ">
                                <div>
                                    <p className="m-0">{pr.product.name}</p>
                                    <p className="m-0">Код товара:{pr.product.id}</p>
                                </div>

                            </td>
                            <td>
                                <div className='d-flex align-items-center gap-3 '>
                                    <a href="#" className="text-decoration-none text-danger fs-5 fw-bold ">-</a>
                                    <div className="input-group" style={{"width": "50px"}}>
                                        <input type="text" className="form-control"
                                               aria-label="quantity" value={1}/>
                                    </div>
                                    <a href="#" className="text-decoration-none text-danger fs-5 fw-bold "
                                    >+</a>
                                </div>

                            </td>
                            <td >
                                <p>{pr.product.price} руб.</p>
                            </td>
                            <td >
                                <a href="#" className="btn alert-danger">&#10006;</a>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <div className="mb-xl-5">
                <h3>Итого:"сумма корзины" руб.</h3>
            </div>
            <form action="POST">
                <div className="row mb-3">
                    <div className="col-md-4 col-xs-12 form-group">
                        <label htmlFor="name" className="fw-bold mb-2">Имя</label>
                        <input type="text" id="name" name="name" maxLength={255} required placeholder="Имя фамилия"
                               className="form-control"/>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <label htmlFor="telephone" className="fw-bold mb-2">Контактный телефон</label>
                        <input type="text" id="telephone" name="telephone" maxLength={255} required
                               className="form-control"/>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <label htmlFor="email" className="fw-bold mb-2">E-mail</label>
                        <input type="text" id="email" name="email" maxLength={255} required className="form-control"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6 col-xs-12">
                        <label htmlFor="shipping_method" className="fw-bold mb-2">Способ доставки</label>
                        <select name="shipping_method" id="shipping_method" className="form-control">
                            <option value="20">Курьерская Москва (300 р. При заказе от 10 000 руб. - бесплатно)</option>
                            <option value="30">Курьерская СПб (300 р. При заказе от 10 000 руб. - бесплатно)</option>
                            <option value="40">Курьерская РФ (от 450 р. При заказе от 20 000 руб. - бесплатно)</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <label htmlFor="address" className="fw-bold mb-2">Адрес доставки</label>
                        <input type="text" id="address" name="address" maxLength={255} required
                               className="form-control"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6 col-xs-12">
                        <label htmlFor="payment_method" className="fw-bold mb-2">Способ оплаты</label>
                        <select name="payment_method" className="form-control">
                            <option value="0" selected="selected">Будет предложен менеджером
                            </option>
                            <option value="20">Оплата пластиковой картой</option>
                            <option value="30">Оплата курьеру наличными (Санкт-Петербург)</option>
                            <option value="40">Оплата курьеру наличными (Москва)</option>
                            <option value="50">Оплата курьеру пластиковой картой (Санкт-Петербург)</option>
                            <option value="60">Оплата курьеру пластиковой картой (Москва)</option>

                        </select>
                    </div>
                </div>
                <div className="row mb-3">

                    <label htmlFor="comment_user" className="fw-bold mb-2">Комментарий</label>
                    <textarea type="text" id="comment_user" name="comment_user" required className="form-control w-100"
                              style={{"resize": "none"}}/>

                </div>
                <div className="row mb-3">
                    <button type="submit" className="btn btn-dark w-25 mx-auto m-4">Отправить</button>
                </div>
                <div className="row mb-5">
                    <div className="form-group checkbox d-flex gap-3">
                        <input id="form_privacy" name="policy" type="checkbox" required/>
                        <label htmlFor="form_privacy" className="small">Нажимая кнопку «Регистрация», я даю свое
                            согласие на обработку моих персональных данных и соглашаетесь с <a href="/policy/">политикой
                                конфиденциальности</a>, в соответствии с Федеральным законом от 27.07.2006 года
                            №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на
                            обработку персональных данных
                        </label>
                    </div>
                </div>

            </form>


        </Container>


    )
};

export default Cart;