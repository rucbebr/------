import React from "react";
import { Link } from "react-router-dom";
import {Button} from "@alfalab/core-components/button";
import './styles.css';

export const LandingInfo = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <h2 className="landing-title">ROKON - УЧИСЬ И ПОБЕЖДАЙ!</h2>
            <p className="landing-text">Студенты будущего, которые делают учебный процесс интереснее, а самое главное - мотивируют на
            достижение результатов. Наша главная цель - показать, что при помощи нашей бонусной системы именно<b> ты </b>захочешь учиться!
            </p>

            <div>
                <Button 
                className = "button button-reg">
                    <Link className={`registration `} to="/register" onClick={()=>setOpen(!open)}>Вперед к бонусам!</Link>
                </Button>
            </div>

            <h2 className="landing-sec">КАК РАБОТАЕТ СИСТЕМА БОНУСОВ?</h2>
            <div className="landing-steps">

            <svg className="circle1" viewBox="0 0 80 80" width="80" height="80">
                        <circle className="circle" cx="40" cy="40" r="38"/>
                    </svg>
                <p className="step1">Пройди простую регистрацию и заполни профиль</p>

                    <svg className="circle2" viewBox="0 0 80 80" width="80" height="80">
                        <circle className="circle" cx="40" cy="40" r="38"/>
                    </svg>    
                <p className="step2">Выбери основные категории заданий </p>


                    <svg className="circle3" viewBox="0 0 80 80" width="80" height="80">
                        <circle className="circle" cx="40" cy="40" r="38"/>
                    </svg>   
                <p className="step3">Начниай выполнять задания во время учебного процесса </p>

                    <svg className="circle4" viewBox="0 0 80 80" width="80" height="80">
                        <circle className="circle" cx="40" cy="40" r="38"/>
                    </svg>
                <p className="step4">Получай бонусы на сессии!</p>

                    <div>
                <Button 
                className = "button button-want">
                    <Link className={`wantit`} to="/mission" onClick={()=>setOpen(!open)}>Хочу получать бонусы!</Link>
                </Button>
                    </div>
            </div>

            
            <div className="marginkok">
                <form></form>
            </div>

        </div>

       
    )
}