import React from "react";

const SimpleForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            placeholder="your name"
          />
        </div>
        <div>
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            placeholder="your email"
          />
        </div>

        <input type="submit" value="submit" className="btn" />
      </form>
    </div>
  );
};

export default SimpleForm;
