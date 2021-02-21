import React, { useRef, useState, useEffect } from "react";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import { LIMITED_LIABILITY } from "../../common/header/HeaderTitles";
import LandingPagesHeader from "../../common/header/LandingPagesHeader";
import LimitedLiabilityContent from "./LimitedLiabilityContent";

function LimitedLiabilityCompany() {
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
        headerTitle={LIMITED_LIABILITY.title}
        headerDesc={LIMITED_LIABILITY.desc}
      />
      <LimitedLiabilityContent
        contentDivRef={contentDivRef}
        isFixedForm={isFixedForm}
        formRef={formRef}
      />
      <FeedbackAndServices />
    </>
  );
}

export default LimitedLiabilityCompany;
