import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://pristor.ru/wp-content/uploads/2021/04/e8ed310a65d41f6f8c1c7430e8003b71.jpg',
    name: 'Eren',
    message: 'I will kill all titans!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
