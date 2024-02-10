import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {

    const enteredValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(enteredValue);
    
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
        {/* {console.log(name)} */}
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
        {console.log(phone)}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input type="submit" value="Add Contact"/>
      </form>
    </>
  );
};
