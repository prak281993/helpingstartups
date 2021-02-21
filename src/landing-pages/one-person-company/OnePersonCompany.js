import React, { useRef, useState, useEffect } from "react";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import { ONE_PERSON_COMPANY } from "../../common/header/HeaderTitles";
import LandingPagesHeader from "../../common/header/LandingPagesHeader";
import OnePersonCompanyContent from "./OnePersonCompanyContent";

function OnePersonCompany() {
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
        headerTitle={ONE_PERSON_COMPANY.title}
        headerDesc={ONE_PERSON_COMPANY.desc}
      />
      <OnePersonCompanyContent
        contentDivRef={contentDivRef}
        isFixedForm={isFixedForm}
        formRef={formRef}
      />
      <FeedbackAndServices />
    </>
  );
}

export default OnePersonCompany;
