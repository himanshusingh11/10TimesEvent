import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>Credits: hshimanshusingh001@gmail.com</p>
      <button
        onClick={handleScrollToTop}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ color: "white", fontSize: "20px" }}
        />
      </button>
    </footer>
  );
};

export default Footer;
