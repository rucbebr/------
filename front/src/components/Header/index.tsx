import React from "react";
import { Link } from "react-router-dom";

import './styles.css';

export const Header = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <header className={`header ${!open ? 'header_burger' : 'header_close'}`}>
            <Link className="header-link" to="/">
                <h1 className={`logo `}>RKN</h1>
            </Link>
            <div className={!open ? 'burger' : 'close'}
                onClick={()=>setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            <nav className={!open ? 'nav_burger' : 'nav_close'}>
                <Link className={`header-link home`} to="/" onClick={()=>setOpen(!open)}>О нас</Link>
                <Link className={`header-link prof`} to="/profile" onClick={()=>setOpen(!open)}>Профиль</Link>
                <Link className={`header-link zadani`} to="/mission" onClick={()=>setOpen(!open)}>Задания</Link>

            </nav>
        </header>
    )
}