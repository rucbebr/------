import React, {ChangeEvent, useState} from "react";
import { Link } from "react-router-dom";
import {Input} from "@alfalab/core-components/input";
import {Button} from "@alfalab/core-components/button";


import './styles.css'
import {useNavigate} from "react-router";
import axios from "axios";

const BACKEND_URL = 'http://94.228.120.208';

export const LoginForm = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const change = (event: ChangeEvent<HTMLInputElement>, field: 'email' | 'password') => {
        const value = event.target.value;
        switch (field) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    };
    const submitForm = async () => {
        const result = await axios.post(`${BACKEND_URL}/auth/login`, {
            email,
            password,
        });

        if (result) {
            localStorage.setItem('user', JSON.stringify(result.data));
            navigate('/profile');
        }
    };
    return (
        <>
        <div className="login">
            <form>
                <p className="text-reg">Вход</p>
                <Input
                    className="field field-log"
                    value={email}
                    placeholder="Email"
                    type="email"
                    onChange={(event) => change(event, 'email')}
                />
                <Input
                    className="field field-log"
                    value={password}
                    placeholder="Пароль"
                    type="password"
                    onChange={(event) => change(event, 'password')}
                />
                <Button
                    className="button marginforreg lol"
                    onClick={submitForm}
                >
                        <Link to="/profile" onClick={()=>setOpen(!open)}>Войти</Link>
                </Button>
            </form>
        </div>
        </>
    )
};