import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import "./QueryForm.scss";

export default function QueryForm({ formRef, fromBody, isFixedForm }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState();
  const [queryMessage, setQueryMessage] = useState("");
  const mailApi = "/hs/send-email";
  const sendMail = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("helpingstartups", mailApi, {
        body: {
          fullname: fullname,
          sender: email,
          contactNumber: contactNumber,
          queryMessage: queryMessage,
          subject: "Query Mail",
        },
      });
      if (response) {
        setFullname("");
        setEmail("");
        setContactNumber("");
        setQueryMessage("");
        // handleToast(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  let formClass = fromBody
    ? "landing-query__form--custom"
    : "landing-query__form";
  return (
    <form
      ref={formRef}
      className={isFixedForm ? `${formClass} ${formClass}-fixed` : formClass}
    >
      <div className={`${formClass}-fields`}>
        <input
          placeholder="&#xf2b9;   Full Name"
          type="text"
          className={`${formClass}-field ${formClass}--fullname`}
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <input
          placeholder="&#xf0e0;   Email Address"
          type="email"
          className={`${formClass}-field ${formClass}--email`}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="&#xf098;   Contact Number"
          type="number"
          className={`${formClass}-field ${formClass}--contact`}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <textarea
          placeholder="&#xf108;   Drop a message"
          type="text"
          className={`${formClass}-field ${formClass}--question`}
          onChange={(e) => setQueryMessage(e.target.value)}
          value={queryMessage}
        ></textarea>
      </div>
      <button
        className={`btn btn-primary ${formClass}-button`}
        type="button"
        onClick={sendMail}
      >
        Submit
      </button>
    </form>
  );
}
