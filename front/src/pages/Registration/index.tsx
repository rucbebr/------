import React from "react";
import { LoginForm } from "../../components/LoginForm";
import { RegistrationForm } from "../../components/RegistrationForm";

import './styles.css'

export const Registration = () => {
    return (


        <div>
            <div className="privki"> 
                <h1 className="glav">ПРИВЕТ!</h1>
                <p className="neglav">Скорее регестрируйся или авторизуйся 
                    что бы получать бонусы
                </p>
            </div>

        <div className="registration-holder">
            <div className="log">
                <LoginForm/>
            </div>

            <div className="reg">
                <RegistrationForm/>
            </div>
        </div>

        </div>
    )
}