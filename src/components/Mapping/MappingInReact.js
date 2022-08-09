import React, { useState } from 'react'

function MappingInReact() {
    const fruits = ['Apple', 'Peach', 'Banana', 'Grape'];
    const [color, setColor] = useState(false);
    const changeColor = () => {
      setColor(current => !current);
    }


  return (
    
    <ul>
        {
            fruits.map(fruits => <button style={{
              backgroundColor: color ? 'green' : '',
              color: color ? 'white' : '',
            }} onClick={changeColor} key={fruits}>{fruits}</button>)
        }
    </ul>
  )
}

export default MappingInReact