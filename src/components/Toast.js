import React from "react";

function Toast({ message }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{ position: "relative", minHeight: "200px" }}
    >
      <div
        className="toast"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "35rem",
          textAlign: "center",
          background: "linear-gradient(to right bottom, #058849, #0180a0)",
          opacity: 1,
          color: "white",
          fontSize: "1.6rem",
          padding: "1rem",
        }}
      >
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
}

export default Toast;
