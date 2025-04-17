import React from "react";

const FormAction = () => {
    
  const handleFormAction = (formData) => {
    console.log(formData);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
    <div>
      <form action={handleFormAction} className="flex gap-3 flex-col">
        <input className="input" type="text" name="name" id="name" placeholder="name" />
        <input className="input" type="email" name="email" id="email" placeholder="email" />
        <input className="btn" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FormAction;
