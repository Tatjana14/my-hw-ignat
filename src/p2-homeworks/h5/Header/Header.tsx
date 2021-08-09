import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "../Routes";
import s from "./Header.module.css"

function Header() {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const menuContainerClassName = `${s.container} ${menuActive ? s.active : ''}`;
    const onClick = () => {
        setMenuActive(!menuActive)
    }
    return (
        <div className={menuContainerClassName}>
            <ul className={s.menu}>
                <li className={s.menuItem}>
                    <NavLink className={s.menuLink} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
                </li>
                <li className={s.menuItem}>
                    <NavLink className={s.menuLink} to={PATH.JUNIOR}>Junior</NavLink>
                </li>
                <li className={s.menuItem}>
                    <NavLink className={s.menuLink} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
                </li>
            </ul>
            <button onClick={onClick} className={s.btn}></button>
        </div>
    )
}

export default Header
