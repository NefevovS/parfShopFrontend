import React from 'react';
import {Button, Container, Form} from "react-bootstrap";

const Auth = () => {
    return (<Container>
            <Form className="w-50 p-5 m-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email адрес</Form.Label>
                    <Form.Control type="email" placeholder="Введите email"/>
                    <Form.Text className="bg-danger text-white p-2 rounded d-inline-block " >
                       Такого пользователя не существует
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль"/>
                    <Form.Text className="bg-danger text-white p-2 rounded d-inline-block" >
                        Пароль/имя пользователя не верны
                    </Form.Text>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>

            эту же форму сделать для регистрации
        </Container>

    );
};

export default Auth;