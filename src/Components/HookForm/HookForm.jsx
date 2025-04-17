import React from "react";
import UseInputField from "../../Hooks/UseInputField";

const HookForm = () => {
  const [name, nameOnChange] = UseInputField("");
  const [email, emailOnChange] = UseInputField("");
  const [password, passrowsOnChange] = UseInputField("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("submitted", { name, email, password });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          className="input"
          defaultValue={name}
          type="text"
          onChange={nameOnChange}
        />
        <input
          className="input my-3"
          defaultValue={email}
          type="email"
          onChange={emailOnChange}
        />
        <input
          className="input"
          defaultValue={password}
          type="password"
          onChange={passrowsOnChange}
        />

        <input type="submit" value="submit" className="btn w-full" />
      </form>
    </div>
  );
};

export default HookForm;
