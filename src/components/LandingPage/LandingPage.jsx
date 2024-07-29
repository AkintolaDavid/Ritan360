import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Services } from "../../Services/Services";
import "./LandingPage.css";
import { DigitalAgency } from "../../DigitalAgency/DigitalAgency";
import { GrowYour } from "../../GrowYour/GrowYour";
import a from "../../asset/laptop1.jpg";
import b from "../../asset/laptop2.jpeg";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
export const LandingPage = () => {
  const images = [
    { src: b, text: "Intelligent Design", classname: "intDes" },
    { src: a, text: "We Design Websites", classname: "desWeb" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(goToNextImage, 4000);
    return () => clearInterval(interval);
  }, []);
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="container">
        <FaAngleLeft onClick={goToPrevImage} className="FaArrowLeft" />
        <div className="image-container">
          <img
            className="containerimg"
            src={images[currentIndex].src}
            alt="slider"
          />
          <div className={images[currentIndex].classname}>
            {images[currentIndex].text}
          </div>
        </div>{" "}
        <FaAngleRight onClick={goToNextImage} className="FaArrowRight" />
      </div>
      <DigitalAgency />
      <Services />
      <GrowYour />
    </>
  );
};
