import React from "react";

import "./Contact.css";

function Contact(props) {
  const { name, avatar, online } = props;

  return (
    <div className="Contact">
      <img className="avatar" src="https://i.pinimg.com/originals/5c/06/68/5c0668716bad0772cd6e64e300477300.jpg" alt="" />
      <div>
        <h4 className="name">{name}</h4>
        <p className="status">{online ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}

export default Contact;