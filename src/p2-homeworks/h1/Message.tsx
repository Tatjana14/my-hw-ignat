import React from 'react'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div>
            <img src={props.avatar}/>
            <div>
                <p>{props.name}</p>
                <span>{props.message}</span>
                <span>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
