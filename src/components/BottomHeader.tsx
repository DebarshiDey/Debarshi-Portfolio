import React from "react";
import "./BottomHeader.css";
import { useColorMode } from "@chakra-ui/react";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { useState } from "react";

const BottomHeader = () => {
  const { colorMode } = useColorMode();
  const [isEmphasized, setIsEmphasized] = useState(false);
  let barColor, fontColor;
  if (colorMode === "dark") {
    barColor = "black";
    fontColor = "white";
  } else {
    barColor = "aliceblue";
    fontColor = "black";
  }
  const handleIconClick = (link: string) => {
    window.open(link, "_blank");
  };
  const iconStyle = isEmphasized ? { fontWeight: "bold" } : {};

  return (
    <div
      style={{ backgroundColor: barColor, color: fontColor }}
      className="bottom-header"
    >
      <div className="icon-container">
        <BiLogoLinkedin
          style={iconStyle}
          className="icon"
          onClick={() =>
            handleIconClick("https://linkedin.com/in/debarshi-dey/")
          }
        ></BiLogoLinkedin>
        <BsInstagram
          style={iconStyle}
          className="icon"
          onClick={() => handleIconClick("https://instagram.com/rishiiidey/")}
        ></BsInstagram>
        <BsGithub
          style={iconStyle}
          className="icon"
          onClick={() => handleIconClick("https://github.com/debarshidey/")}
        ></BsGithub>
      </div>
    </div>
  );
};

export default BottomHeader;
