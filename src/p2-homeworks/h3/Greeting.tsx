import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.container}>
            <div className={s.inputWrapper}>
                <input value={name} onKeyPress={onEnter} onChange={setNameCallback} className={inputClass}/>
                <span className={s.errorText}>{error}</span>
            </div>
            <button className={s.btn} onClick={addUser} disabled={!name}>add</button>
            <span className={s.users}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
