import React, { useState } from "react";

const ControlledField = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    console.log({ name, email, password });
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("your password is as small as your dick");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          className="input"
          type="name"
          name="name"
          placeholder="name"
          required
          onChange={handleNameChange}
          defaultValue={name}
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={handleEmailChange}
          defaultValue={email}
        />

        <input
          className="input"
          type="password"
          name="password"
          placeholder="passrows"
          required
          onChange={handlePasswordChange}
          defaultValue={password}
        />
        {error && (
          <small className="text-red-600">
            <p>{error}</p>
          </small>
        )}
        <input className="btn w-full" type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default ControlledField;
