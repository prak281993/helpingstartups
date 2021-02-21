import React, { useRef, useEffect, useState } from "react";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import { SECTION_EIGHT } from "../../common/header/HeaderTitles";
import LandingPagesHeader from "../../common/header/LandingPagesHeader";
import SectionEightContent from "./SectionEightContent";

function SectionEight() {
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
        headerTitle={SECTION_EIGHT.title}
        headerDesc={SECTION_EIGHT.desc}
      />
      <SectionEightContent
        contentDivRef={contentDivRef}
        isFixedForm={isFixedForm}
        formRef={formRef}
      />
      <FeedbackAndServices />
    </>
  );
}

export default SectionEight;
