import React from "react";
import "./Contact.css";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online
    };
  }



  changeStatus = e => {
    e.preventDeafault();
    this.setState({ online: !this.StaticRange.online });
  };

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="" />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <p className="status" onClick={this.changeStatus}>{this.state.online ? "Online" : "Offline"}</p>
        </div>
      </div>
    );
  }
}

export default Contact;