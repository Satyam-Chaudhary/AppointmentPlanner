import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date || getTodayString()}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="contact">Contact</label>
        <ContactPicker
          id="contact"
          contacts={contacts}
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          name={"contact"}
        />
        <input type="submit" value="Add Appointment" />
      </form>
    </>
  );
};
