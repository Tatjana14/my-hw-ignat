import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.container}>
            <h1 className={s.errorNumber}>404</h1>
            <h2 className={s.errorText}>Page not found!</h2>
            <div className={s.symbol}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <NavLink className={s.homePageLink} to="/">HOMEPAGE</NavLink>
        </div>
    )
}

export default Error404
