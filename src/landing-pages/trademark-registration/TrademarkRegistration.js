import React, { useEffect, useRef, useState } from "react";
import LandingPagesHeader from "../../common/header/LandingPagesHeader";
import TrademarkRegistrationContent from "./TrademarkRegistrationContent";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import { TRADEMARK_REGISTRATION } from "../../common/header/HeaderTitles";

export default function TrademarkRegistration() {
  const contentDivRef = useRef();
  const formRef = useRef();
  const [isFixedForm, setIsFixedForm] = useState(false);

  const handleScroll = () => {
    if (contentDivRef.current) {
      const contentDivHeight = contentDivRef.current.getBoundingClientRect()
        .height;
      const contentDivYPosition = contentDivRef.current.getBoundingClientRect()
        .y;
      const formHeight = formRef.current.getBoundingClientRect().height;
      if (contentDivYPosition <= 50) {
        setIsFixedForm(true);
        if (contentDivHeight + contentDivYPosition <= formHeight + 50) {
          setIsFixedForm(false);
        } else {
          setIsFixedForm(true);
        }
      } else {
        setIsFixedForm(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
  }, []);
  return (
    <div>
      <LandingPagesHeader
        headerTitle={TRADEMARK_REGISTRATION.title}
        headerDesc={TRADEMARK_REGISTRATION.desc}
      />
      <TrademarkRegistrationContent
        contentDivRef={contentDivRef}
        isFixedForm={isFixedForm}
        formRef={formRef}
      />
      <FeedbackAndServices />
    </div>
  );
}
