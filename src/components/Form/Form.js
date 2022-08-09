import React, { useState } from "react";

function Form() {
    const [userInput, setuserInput] = useState({
      Name: "",
      Email: "",
      ImageUrl: "",
      Description: ``,
    });
//   const [userName, setuserName] = useState("");
//   const [userEmail, setuserEmail] = useState("");
//   const [userImageUrl, setuserImageUrl] = useState("");
//   const [userDescription, setuserDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // setuserInput({...userInput, Name: Email:  });
    // setuserInput("");
    
    // setuserName("");
    // setuserEmail("");
    // setuserImageUrl("");
    // setuserDescription("");

    // const enteredName = setuserName(e.target.value);
    // const enteredEmail = setuserEmail(e.target.value);
    // const enteredImageUrl = setuserImageUrl(e.target.value);
    // const enteredDescription = setuserDescription(e.target.value);

    // const InputData = {
    //   Name: enteredName,
    //   Email: enteredEmail,
    //   ImageUrl: enteredImageUrl,
    //   Description: enteredDescription,
    // };

    console.log(userInput);
  };
  return (
    <div>
      <h2>UseState Form!</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="title-input">
          <label htmlFor="title"> Form Name</label>
          <input
            value={userInput.Name}
            type="text"
              onChange={(e) => {setuserInput({...userInput, Name: e.target.value})}}
            // onChange={(e) => setuserName(e.target.value)}
            required
            id="title"
          />
        </div>
        <div className="email-input">
          <label htmlFor="email"> Email</label>
          <input
            value={userInput.Email}
            type="email"
              onChange={(e) => {setuserInput({...userInput, Email: e.target.value})}}
            // onChange={(e) => setuserEmail(e.target.value)}
            required
            id="email"
          />
        </div>
        <div className="image-input">
          <label htmlFor="image"> Add Image</label>
          <input
            value={userInput.ImageUrl}
            type="text"
            alt="image-url"
            onChange={(e) => {setuserInput({...userInput, ImageUrl: e.target.value})}}
            // onChange={(e) => setuserImageUrl(e.target.value)}
            required
            id="image"
          />
        </div>
        <div className="description-input">
          <label htmlFor="destription"> description</label>
          <textarea
            value={userInput.Description}
            onChange={(e) => {setuserInput({...userInput, Description: e.target.value})}}
            // onChange={(e) => setuserDescription(e.target.value)}
            required
            id="description"
            rows={2}
          ></textarea>
        </div>
        <div className="submit-btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Form() {
//     const [messages, setMessages] = useState(['Hello Orwa!']);
//     const [userInput, setuserInput] = useState('')

//     const onSubmitHandler = (e) => {
//         e.preventDefault();

//         setuserInput('');
//         setMessages([...messages, userInput]);

//         console.log(messages)

//     }

//     const onChangeHandler = (e) => {
//         setuserInput(e.target.value)
//     }
//   return (
//     <div>
//         <h2>UseState Form!</h2>
//       <form onSubmit={onSubmitHandler}>
//         <div className="title-input">
//           <label htmlFor="title"> Form Name</label>
//           <input type="text" onChange={onChangeHandler} required id="title" />
//         </div>
//         <div className="email-input">
//           <label htmlFor="email"> Email</label>
//           <input type="email" onChange={onChangeHandler} required id="email" />
//         </div>
//         <div className="image-input">
//           <label htmlFor="image"> Add Image</label>
//           <input type="image" alt='image-url' onChange={onChangeHandler} required id="image" />
//         </div>
//         <div className="description-input">
//           <label htmlFor="destription"> description</label>
//           <textarea onChange={onChangeHandler} required id="description" rows={5}></textarea>
//         </div>
//         <div className="submit-btn">
//           <button>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Form;
