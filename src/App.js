import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  // const initialContacts = {
  //   name: '',
  //   phone: '',
  //   email: ''
  // }
  // const initialAppointments = {
  //   title: '',
  //   contact: '',
  //   date: '',
  //   time: ''
  // }
  const [contact, setContact] = useState([]);
  const [appointment , setAppointment] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addContact = (name, phone, email) => {
  name = {
    name: name,
    phone: phone,
    email: email
  };
  setContact(prev => [...prev, name]);
 };

 const addAppointment = (title, contact, date, time) => {{
  const newAppointment = {
    title: title,
    contact: contact,
    date: date,
    time: time
  };
  setAppointment(prev => [...prev, newAppointment]);
  }
 }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contact = {contact} addContact = {addContact}/> /* Add props to ContactsPage */}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={<AppointmentsPage  appointment = {appointment}  contacts = {contact} addAppointment = {addAppointment}/> /* Add props to AppointmentsPage */}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
