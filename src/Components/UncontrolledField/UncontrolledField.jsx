import React, { useRef } from "react";

const UncontrolledField = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(emailRef.current.value);
    // console.log(passwordRef.current.value);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({ email, password });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="email"
          ref={emailRef}
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="password"
          ref={passwordRef}
        />
        <input className="btn w-full" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UncontrolledField;
