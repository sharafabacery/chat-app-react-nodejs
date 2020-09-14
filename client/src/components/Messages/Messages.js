import React from 'react'
import ScrollBottom from 'react-scroll-to-bottom';
import Message from "./Message/Message";
import './Messages.css'
const Messages=({messages,name})=> (
    <ScrollBottom className="messages">
    {messages.map((message,i)=><div key={i}>
    <Message message={message} name={name}/>
    </div>)}
    </ScrollBottom>
)


export default Messages
