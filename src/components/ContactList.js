
import React from "react";
import Contact from "./Contact"

const ContactList = (props) => {
  const { users } = props;

  return (
    <div>
      {users.map(user => (
        <Contact name={user.name} avatar={user.avatar} online={user.online} />
      ))}
    </div>
  )
}


export default ContactList;
