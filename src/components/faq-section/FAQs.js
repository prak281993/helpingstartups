import React from "react";
import FAQ from "./FAQ";
import qa from "./questions.json";

function FAQs() {
  return (
    <div className="accordion" id="accordionExample">
      {qa.map((item, index) => (
        <FAQ item={item} index={index} />
      ))}
    </div>
  );
}

export default FAQs;
