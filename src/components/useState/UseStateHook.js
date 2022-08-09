import React from 'react'
import  { useState } from "react";

function UseStateHook() {
    const [messages, setMessages] = useState(['Hello Orwa!']);
    const [userInput, setuserInput] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setuserInput('');
        setMessages([...messages, userInput]);

    }
  return (
    <div>
        <h3>Chat & Todo App Concept</h3>
        <ul>
            {messages.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
        </ul>
        <div>
            <form onSubmit={onSubmitHandler}>
                <input 
                type='text' 
                value={userInput}
                onChange={event => setuserInput(event.target.value)} />
                <button>Send/Add Todo</button>
            </form>
        </div>
    </div>
  )
}

export default UseStateHook