import React, { useEffect, useRef, useState } from "react";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import { PRIVATE_LIMITED } from "../../common/header/HeaderTitles";
import LandingPagesHeader from "../../common/header/LandingPagesHeader";
import PrivateLimitedContent from "./PrivateLimitedContent";

function PrivateLimited() {
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
    <>
      <LandingPagesHeader
        headerTitle={PRIVATE_LIMITED.title}
        headerDesc={PRIVATE_LIMITED.desc}
      />
      <PrivateLimitedContent
        contentDivRef={contentDivRef}
        isFixedForm={isFixedForm}
        formRef={formRef}
      />
      <FeedbackAndServices />
    </>
  );
}

export default PrivateLimited;
