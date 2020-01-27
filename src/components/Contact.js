import React from "react";

import "./Contact.css";

function Contact(props) {
  const { name, avatar, online } = props;

  return (
    <div className="Contact">
      <img className="avatar" src="http://randomuser.me/api/portraits/women/10.jpg" alt="" />
      <div>
        <h4 className="name">{name}</h4>
        <p className="status">{online ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}

export default Contact;