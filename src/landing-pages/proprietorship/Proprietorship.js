import React, { useRef, useEffect, useState } from "react";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import { PROPRIETORSHIP } from "../../common/header/HeaderTitles";
import LandingPagesHeader from "../../common/header/LandingPagesHeader";
import ProprietorshipContent from "./ProprietorshipContent";

export default function Proprietorship() {
  const headerRef = useRef();
  const contentDivRef = useRef();
  const formRef = useRef();
  const [isFixedForm, setIsFixedForm] = useState(false);

  const handleScroll = () => {
    if (headerRef.current && contentDivRef.current) {
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      const headerYPosition = headerRef.current.getBoundingClientRect().y;
      const contentDivHeight = contentDivRef.current.getBoundingClientRect()
        .height;
      const contentDivYPosition = contentDivRef.current.getBoundingClientRect()
        .y;
      const formHeight = formRef.current.getBoundingClientRect().height;
      if (headerHeight + headerYPosition <= 50) {
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
        headerRef={headerRef}
        headerTitle={PROPRIETORSHIP.title}
        headerDesc={PROPRIETORSHIP.desc}
      />
      <ProprietorshipContent
        contentDivRef={contentDivRef}
        isFixedForm={isFixedForm}
        formRef={formRef}
      />
      <FeedbackAndServices />
    </>
  );
}
