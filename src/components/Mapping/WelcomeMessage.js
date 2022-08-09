import React from 'react'

function WelcomeMessage(props) {
  return (
    <div>
        <h3>{`${props.msg} ${props.name}`}</h3>
    </div>
  )
}

export default WelcomeMessage