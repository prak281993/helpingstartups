import React, { useEffect, useRef, useState } from "react";
import LandingPagesHeader from "../../common/header/LandingPagesHeader";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import { TRADEMARK_OBJECTION } from "../../common/header/HeaderTitles";
import TrademarkObjectionContent from "./TrademarkObjectionContent";

export default function TrademarkObjection() {
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
    <div>
      <LandingPagesHeader
        headerRef={headerRef}
        headerTitle={TRADEMARK_OBJECTION.title}
        headerDesc={TRADEMARK_OBJECTION.desc}
      />
      <TrademarkObjectionContent
        contentDivRef={contentDivRef}
        isFixedForm={isFixedForm}
        formRef={formRef}
      />
      <FeedbackAndServices />
    </div>
  );
}
