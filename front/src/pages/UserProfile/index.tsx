import React from "react";
import axios from "axios";
import authHeader from "../../utils";

import './styles.css';
import { Button } from "@alfalab/core-components/button";
import { Link } from "react-router-dom";

export const UserProfile = () => {
    const BACKEND_URL = 'http://94.228.120.208';
    const [userData, setUserData] = React.useState({
        photo: '',
        name: '',
        id: '',
        balance: 0,
    });
    const getUserInfo = () => {
        axios.get(`${BACKEND_URL}/user/me`, {
            headers: authHeader(),
        }).then((result) => {
            const data = result.data.response;
            if (data) {
                setUserData({
                    photo: data.photo,
                    name: data.name,
                    id: data.id,
                    balance: data.balance,
                })
            }
        })
    };
    React.useEffect(() => {
        getUserInfo();
    }, []);
    return (
        <div>
            <h1 className="landing-title">СНОВА ПРИВЕТ!</h1>
            <p className="landing-text">Это твой профиль, здесь ты можешь 
            отслеживать свой прогресс   </p>
            <div className="studinfo">
                <p className="landing-text">Центр - <b>ИКТ</b></p>
                <p className="landing-text">Группа - <b>КСиК-33</b></p>
                <p className="landing-text"><b>Зайдуллин Никита</b></p>
            </div>

            <div className="studbut">
                <form>
                    <p className="studtex">Прогресс по заданиям</p>
                </form>
            </div>



            <div className="progress">
                    
                <div className="prog1">
                    <form>
                        <h1 className="progtitle">Ежедневные</h1>
                        <p className="progachive">9/10</p>
                        <p className="progtext">Для награды осталось 
                        выполнить <a className="progsif">1</a> задания</p>
                    </form>
                </div>

                <div className="prog2">
                    <form>
                        <h1 className="progtitle">Еженедельные</h1>
                        <p className="progachive">8/12</p>
                        <p className="progtext">Для награды осталось 
                        выполнить <a className="progsif">4</a> задания</p>
                    </form>
                </div>

                <div className="prog3">
                    <form>
                        <h1 className="progtitle">Ежемесячные</h1>
                        <p className="progachive">1/3</p>
                        <p className="progtext">Для награды осталось 
                        выполнить <a className="progsif">2</a> задания</p>
                    </form>
                </div>

                </div>


                <div className="harosh">
                <form>
                    <p className="haroshtext">Молодец! Ты лучше 50% студентов</p>
                </form>
                </div>

            <div className="marginkok">
                <form></form>
            </div>

        </div>
    )
}