import React from "react";
import { useState } from "react";
import "./FAQ.scss";

function FAQ(props) {
  const [accordianExpanded, setAccordianExpanded] = useState(false);
  const { item, index } = props;
  const { question, answer } = item;
  return (
    <div
      className="faq-card card collapsed"
      data-toggle="collapse"
      data-target={`#collapse${index}`}
      aria-expanded="false"
      aria-controls={`collapse${index}`}
      onClick={()=> setAccordianExpanded(prev => !prev)}
    >
      <div className="faq-card__header card-header" id={`heading${index}`}>
        <div>
          <h2>{question}</h2>
        </div>
        <span>
          <i
            class={`fa ${
              accordianExpanded ? "fa-chevron-down" : "fa-chevron-right"
            }`}
          ></i>
        </span>
      </div>
      <div
        id={`collapse${index}`}
        className="collapse"
        aria-labelledby={`heading${index}`}
        data-parent="#accordionExample"
      >
        <div className="faq-card__card-body card-body">{answer}</div>
      </div>
    </div>
  );
}

export default FAQ;
