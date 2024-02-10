import React from "react";

export const ContactPicker = ({contacts , onChange, value, name}) => {
  return (
    <>
      <select name={name} onChange={onChange} value={value}>
        <option key="0" value=""></option>
        {contacts.map((contact, index) => {
          return (
            <option key={index} value={contact.name}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
