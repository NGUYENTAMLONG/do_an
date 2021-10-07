import "./Home/style/Home.css";
import React, { useEffect, useState } from "react";
export default function Scrollup() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top scroll_up">
      {isVisible && (
        <div onClick={scrollToTop}>
          <i className="fas fa-3x fa-chevron-circle-up"></i>
        </div>
      )}
    </div>
  );
}
