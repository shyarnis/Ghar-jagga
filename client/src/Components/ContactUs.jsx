import React, { Component } from "react";
import "../Stylesheets/ContactUs.css";

import { api } from "../utils/api";

export class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      subject: "",
      message: "",
    };
    this.handleForm = this.handleForm.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  handleForm(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  sendMessage(e) {
    e.preventDefault();
    console.log(this.state);

    api
      .post("/email", {
        email: this.state.email,
        phone: this.state.phone,
        subject: this.state.subject,
        message: this.state.message,
      })
      .then((response) => {
        alert(response.data.check);
      });
  }
  render() {
    return (
      <div className="HouseDescription__rightContainer">
        <form className="ContactForm" onSubmit={this.sendMessage}>
          <h3>Contact Us</h3>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={this.handleForm}
            id="email"
          />
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="Enter your phone number"
            onChange={this.handleForm}
            id="phone"
          />

          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter the subject of the message"
            onChange={this.handleForm}
            id="subject"
          />
          <label>Message</label>
          <textarea
            cols="10"
            rows="10"
            placeholder="Enter your message"
            className="textarea"
            onChange={this.handleForm}
            id="message"
          ></textarea>
          <button>SEND MESSAGE</button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
