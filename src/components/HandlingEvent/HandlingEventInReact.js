import React from 'react'

function HandlingEventInReact() {
    const favoritFruit = (fruit) => {
        prompt('what is your favorite fruit');
        console.log(fruit)
    }
    const logging = message => {
        console.log(message)
    }
  return (
    <>
    <button onClick={() => logging('I clicked')}>Click Me</button>
    <button onClick={favoritFruit}>Click Me</button>
    
    </>
  )
}

export default HandlingEventInReact