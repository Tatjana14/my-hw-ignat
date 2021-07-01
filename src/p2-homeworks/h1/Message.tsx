import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.container}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.message}>
                <p>{props.name}</p>
                <span>{props.message}</span>
                <div className={s.time} >
                    <span>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
