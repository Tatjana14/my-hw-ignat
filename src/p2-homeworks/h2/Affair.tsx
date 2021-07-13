import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    const priorityClass = s.item + ' ' + s[props.affair.priority]

    return (
        <div className={s.affair}>
            <span className={s.item}>{props.affair.name}</span>
            <span className={priorityClass}>{props.affair.priority}</span>
            <button className={s.btn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
