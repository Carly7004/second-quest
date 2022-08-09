import React from 'react'
import WelcomeMessage from './WelcomeMessage';


const messages = [
    {
      name: "Carly",
      msg: "Hello and Welcome "
    },
    {
      name: "Orwa",
      msg: "How are you today "
    },
    {
      name: "Humphery",
      msg: "Welcome to the office "
    }
  ];

function WelcomeMessageList() {
  return (
    <div>
        {messages.map((message, index) =>(
            <WelcomeMessage 
            key={index}
            name={message.name}
            msg={message.msg}/>
        ))}

        {/* {
            messages.forEach((arrcon) =>{
                
                <WelcomeMessage
                name={arrcon.name}
                msg={arrcon.msg}/>
            } 
            )
        } */}
    </div>
  )
}

export default WelcomeMessageList