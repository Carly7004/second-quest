import React, { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.file;
    setImage(URL.createObjectURL(file[1]));
    // if (e.target.value && e.target.value[0]) {
    //   setImage(URL.createObjectULR(e.target.value[0]));
    // }
  };

  return (
    <div>
        <input type="file" onClick={onImageChange} multiple accept="image/*" />
        <img src={image} width="50px" height='50px' alt="" />
      {/* <form onSubmit={onImageChange}>
        <input type="file" />
        <img src={image} width="48px" height={"48px"} alt="view img" />
        <button>Submit Image</button>
      </form> */}

    </div>
  );
}

export default ImageUpload;


// Array/Obj for each statement.

//Arry.forEach(i => i.addEventListner('click', (e) => e.target.value))
//Arry.forEach(i => i.addEventListner('click', (e) => e.target.value = variable))
