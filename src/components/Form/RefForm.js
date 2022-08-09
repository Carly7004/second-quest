import React, { useRef } from "react";

function RefForm() {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputImageUrl = useRef();
  const inputDescription = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredName = inputName.current.value;
    const enteredEmail = inputEmail.current.value;
    const enteredImageUrl = inputImageUrl.current.value;
    const enteredDescription = inputDescription.current.value;

    const InputData = {
      Name: enteredName,
      Email: enteredEmail,
      ImageUrl: enteredImageUrl,
      Description: enteredDescription,
    };

    console.log(InputData);
  };

  return (
    <div>

      <h2>useRef Form!</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="title-input">
          <label htmlFor="title"> Form Name</label>
          <input type="text" ref={inputName} required id="title" />
        </div>
        <div className="email-input">
          <label htmlFor="email"> Email</label>
          <input type="email" ref={inputEmail} required id="email" />
        </div>
        <div className="image-input">
          <label htmlFor="image"> Add Image</label>
          <input
            type="text"
            alt="image-url"
            ref={inputImageUrl}
            required
            id="image"
          />
        </div>
        <div className="description-input">
          <label htmlFor="destription"> description</label>
          <textarea
            ref={inputDescription}
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

export default RefForm;
