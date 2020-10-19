import React from "react";

function PrivateLimitedQueryForm() {
  return (
    <form class="private-limited-query__form">
      <div class="private-limited-query__form-fields">
        <input
          placeholder="Full Name"
          type="text"
          class="private-limited-query__form-field private-limited-query__form--fullname"
        />
        <input
          placeholder="Email Address"
          type="email"
          class="private-limited-query__form-field private-limited-query__form--email"
        />
        <input
          placeholder="Contact Number"
          type="number"
          class="private-limited-query__form-field private-limited-query__form--contact"
        />
        <textarea
          placeholder="Drop a message"
          type="text"
          class="private-limited-query__form-field private-limited-query__form--question"
        ></textarea>
      </div>
      <button
        class="btn btn-primary private-limited-query__form-button"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default PrivateLimitedQueryForm;
