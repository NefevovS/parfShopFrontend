import {Link} from "react-router-dom";

const Footer = () =>
    <footer>
        <div className="text-gray-300"
             style={{height: "100px", width: "100%", position: "absolute", bottom: 0, marginTop: "10px"}}>
            <div className="bg-gray-800 flex justify-center w-full p-4 gap-4">
                <div>
                    <div className="p-1">
                        <a href="tel:88001234567" className="hover:text-white">8 800 123 45 67</a>
                    </div>
                    <div>
                        Online консультант
                    </div>
                </div>
                <div>
                    <div className="p-1">
                        <a href="tel:88001234567" className="hover:text-white">8 800 123 45 67</a>
                    </div>
                    <div>
                        Интернет-магазин
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 flex justify-center w-full gap-4 p-6" style={{height: "100px"}}>
                <div className="flex flex-col justify-center ">

                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <Link to={"/salons"} className="hover:text-white">Салоны</Link>
                            <Link to={"/catalog"} className="hover:text-white">Каталог</Link>
                            <Link to={"/events"} className="hover:text-white">События</Link>
                            <Link to={"/journal"} className="hover:text-white">Журнал</Link>
                            <Link to={"/contacts"} className="hover:text-white">Контакты</Link>
                        </div>
                        <div>
                            Мы в социальных сетях:
                        </div>
                    </div>


                    <div className="flex justify-between">
                        <div className="flex justify-center gap-4">
                            <Link to={"/"} className="hover:text-white">Условия доставки</Link>
                            <Link to={"/"} className="hover:text-white">Возврат товара</Link>
                            <Link to={"/"} className="hover:text-white">Дисконтная программа</Link>
                            <Link to={"/"} className="hover:text-white">Оплата и политика конфиденциальности</Link>
                        </div>
                        <div>
                            <div>
                                VK
                            </div>
                            <div>
                                YouT
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </div>

    </footer>



;

export default Footer;