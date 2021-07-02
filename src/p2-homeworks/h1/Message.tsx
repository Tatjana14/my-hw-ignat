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
            <div className={s.message_wrapper}>
                <div className={s.message_text}>
                    <p className={s.message_author}>{props.name}</p>
                    <span className={s.message_text}>{props.message}</span>
                </div>
                <div className={s.message_time} >
                    <span>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
