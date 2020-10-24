import React from "react";
import { useState } from "react";
import axios from "axios";

function PrivateLimitedQueryForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState();
  const [queryMessage, setQueryMessage] = useState("");
  const mailApi =
    "https://us-central1-helping-startups.cloudfunctions.net/emailSender";
  const sendMail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(mailApi, {
        fullname,
        sender: email,
        contactNumber,
        queryMessage,
        subject: "Query Mail",
      });
      console.log(response);
    }
    catch(err){
      console.log(err);
    }
  };
  return (
    <form class="private-limited-query__form">
      <div class="private-limited-query__form-fields">
        <input
          placeholder="Full Name"
          type="text"
          class="private-limited-query__form-field private-limited-query__form--fullname"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <input
          placeholder="Email Address"
          type="email"
          class="private-limited-query__form-field private-limited-query__form--email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Contact Number"
          type="number"
          class="private-limited-query__form-field private-limited-query__form--contact"
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <textarea
          placeholder="Drop a message"
          type="text"
          class="private-limited-query__form-field private-limited-query__form--question"
          onChange={(e) => setQueryMessage(e.target.value)}
          value={queryMessage}
        ></textarea>
      </div>
      <button
        class="btn btn-primary private-limited-query__form-button"
        type="button"
        onClick={sendMail} 
      >
        Submit
      </button>
    </form>
  );
}

export default PrivateLimitedQueryForm;
