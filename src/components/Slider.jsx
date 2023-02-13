import React from "react";

import "../styles/Slider.css";

import img1 from "../images/slider/praly-view.jpg";
import img2 from "../images/slider/piscine-1.jpg";
import img3 from "../images/slider/chambre1.jpg";
import img4 from "../images/slider/chalet-int.jpg";
import img5 from "../images/slider/chalet-sdb.jpg";
import img6 from "../images/slider/chalet-window.jpg";
import img7 from "../images/slider/chalet-chambre.jpg";
import img8 from  "../images/slider/pool.jpg";
import img9 from "../images/slider/surroundings.jpg";
import img10 from "../images/slider/batiment-piscine.jpg";
// a changer

const Slider = () => {
  function setSliderLeft() {
    let slider = document.getElementById("image-slider");
    let sliderElement = document.getElementById("slider-element");
    let sliderContainer = document.getElementById("slider-container");
    let imageSize = (window.innerWidth / 100) * 33.333333;
    let compStyles = window.getComputedStyle(slider);
    let leftMarginPX = compStyles.marginLeft;

    let leftMarginString = leftMarginPX.replace("px", "");
    let leftMargin = parseFloat(leftMarginString);

    let slide1 = document.getElementById("slide-image-1");
    let slide2 = document.getElementById("slide-image-2");
    let slide3 = document.getElementById("slide-image-3");
    let slide4 = document.getElementById("slide-image-4");
    let slide5 = document.getElementById("slide-image-5");
    let slide6 = document.getElementById("slide-image-6");
    let slide7 = document.getElementById("slide-image-7");
    let slide8 = document.getElementById("slide-image-8");
    let slide9 = document.getElementById("slide-image-9");
    let slide10 = document.getElementById("slide-image-10");
    let slide11 = document.getElementById("slide-image-11");
    let slide12 = document.getElementById("slide-image-12");
    let slide13 = document.getElementById("slide-image-13");

    sliderContainer.parentElement.removeChild(sliderContainer);

    if (leftMargin < 0 && leftMargin > -imageSize) {
      slider.style.setProperty("animation-delay", "-29s");

      slide1.style.setProperty("animation-delay", "-2s");
      slide2.style.setProperty("animation-delay", "-29s");
      slide3.style.setProperty("animation-delay", "-26s");
      slide4.style.setProperty("animation-delay", "-23s");
      slide5.style.setProperty("animation-delay", "-20s");
      slide6.style.setProperty("animation-delay", "-17s");
      slide7.style.setProperty("animation-delay", "-14s");
      slide8.style.setProperty("animation-delay", "-11s");
      slide9.style.setProperty("animation-delay", "-8s");
      slide10.style.setProperty("animation-delay", "-5s");
      slide11.style.setProperty("animation-delay", "-2s");
      slide12.style.setProperty("animation-delay", "-29s");
      slide13.style.setProperty("animation-delay", "-26s");
    }
    if (leftMargin < -imageSize && leftMargin > -2 * imageSize) {
      slider.style.setProperty("animation-delay", "-2s");

      slide1.style.setProperty("animation-delay", "-5s");
      slide2.style.setProperty("animation-delay", "-2s");
      slide3.style.setProperty("animation-delay", "-29s");
      slide4.style.setProperty("animation-delay", "-26s");
      slide5.style.setProperty("animation-delay", "-23s");
      slide6.style.setProperty("animation-delay", "-20s");
      slide7.style.setProperty("animation-delay", "-17s");
      slide8.style.setProperty("animation-delay", "-14s");
      slide9.style.setProperty("animation-delay", "-11s");
      slide10.style.setProperty("animation-delay", "-8s");
      slide11.style.setProperty("animation-delay", "-5s");
      slide12.style.setProperty("animation-delay", "-2s");
      slide13.style.setProperty("animation-delay", "-29s");
    }
    if (leftMargin < -2 * imageSize && leftMargin > -3 * imageSize) {
      slider.style.setProperty("animation-delay", "-5s");

      slide1.style.setProperty("animation-delay", "-8s");
      slide2.style.setProperty("animation-delay", "-5s");
      slide3.style.setProperty("animation-delay", "-2s");
      slide4.style.setProperty("animation-delay", "-29s");
      slide5.style.setProperty("animation-delay", "-26s");
      slide6.style.setProperty("animation-delay", "-23s");
      slide7.style.setProperty("animation-delay", "-20s");
      slide8.style.setProperty("animation-delay", "-17s");
      slide9.style.setProperty("animation-delay", "-14s");
      slide10.style.setProperty("animation-delay", "-11s");
      slide11.style.setProperty("animation-delay", "-8s");
      slide12.style.setProperty("animation-delay", "-5s");
      slide13.style.setProperty("animation-delay", "-2s");
    }
    if (leftMargin < -3 * imageSize && leftMargin > -4 * imageSize) {
      slider.style.setProperty("animation-delay", "-8s");

      slide1.style.setProperty("animation-delay", "-11s");
      slide2.style.setProperty("animation-delay", "-8s");
      slide3.style.setProperty("animation-delay", "-5s");
      slide4.style.setProperty("animation-delay", "-2s");
      slide5.style.setProperty("animation-delay", "-29s");
      slide6.style.setProperty("animation-delay", "-26s");
      slide7.style.setProperty("animation-delay", "-23s");
      slide8.style.setProperty("animation-delay", "-20s");
      slide9.style.setProperty("animation-delay", "-17s");
      slide10.style.setProperty("animation-delay", "-14s");
      slide11.style.setProperty("animation-delay", "-11s");
      slide12.style.setProperty("animation-delay", "-8s");
      slide13.style.setProperty("animation-delay", "-5s");
    }
    if (leftMargin < -4 * imageSize && leftMargin > -5 * imageSize) {
      slider.style.setProperty("animation-delay", "-11s");

      slide1.style.setProperty("animation-delay", "-14s");
      slide2.style.setProperty("animation-delay", "-11s");
      slide3.style.setProperty("animation-delay", "-8s");
      slide4.style.setProperty("animation-delay", "-5s");
      slide5.style.setProperty("animation-delay", "-2s");
      slide6.style.setProperty("animation-delay", "-29s");
      slide7.style.setProperty("animation-delay", "-26s");
      slide8.style.setProperty("animation-delay", "-23s");
      slide9.style.setProperty("animation-delay", "-20s");
      slide10.style.setProperty("animation-delay", "-17s");
      slide11.style.setProperty("animation-delay", "-14s");
      slide12.style.setProperty("animation-delay", "-11s");
      slide13.style.setProperty("animation-delay", "-8s");
    }
    if (leftMargin < -5 * imageSize && leftMargin > -6 * imageSize) {
      slider.style.setProperty("animation-delay", "-14s");

      slide1.style.setProperty("animation-delay", "-17s");
      slide2.style.setProperty("animation-delay", "-14s");
      slide3.style.setProperty("animation-delay", "-11s");
      slide4.style.setProperty("animation-delay", "-8s");
      slide5.style.setProperty("animation-delay", "-5s");
      slide6.style.setProperty("animation-delay", "-2s");
      slide7.style.setProperty("animation-delay", "-29s");
      slide8.style.setProperty("animation-delay", "-26s");
      slide9.style.setProperty("animation-delay", "-23s");
      slide10.style.setProperty("animation-delay", "-20s");
      slide11.style.setProperty("animation-delay", "-17s");
      slide12.style.setProperty("animation-delay", "-14s");
      slide13.style.setProperty("animation-delay", "-11s");
    }
    if (leftMargin < -6 * imageSize && leftMargin > -7 * imageSize) {
      slider.style.setProperty("animation-delay", "-17s");

      slide1.style.setProperty("animation-delay", "-20s");
      slide2.style.setProperty("animation-delay", "-17s");
      slide3.style.setProperty("animation-delay", "-14s");
      slide4.style.setProperty("animation-delay", "-11s");
      slide5.style.setProperty("animation-delay", "-8s");
      slide6.style.setProperty("animation-delay", "-5s");
      slide7.style.setProperty("animation-delay", "-2s");
      slide8.style.setProperty("animation-delay", "-29s");
      slide9.style.setProperty("animation-delay", "-26s");
      slide10.style.setProperty("animation-delay", "-23s");
      slide11.style.setProperty("animation-delay", "-20s");
      slide12.style.setProperty("animation-delay", "-17s");
      slide13.style.setProperty("animation-delay", "-14s");
    }
    if (leftMargin < -7 * imageSize && leftMargin > -8 * imageSize) {
      slider.style.setProperty("animation-delay", "-20s");

      slide1.style.setProperty("animation-delay", "-23s");
      slide2.style.setProperty("animation-delay", "-20s");
      slide3.style.setProperty("animation-delay", "-17s");
      slide4.style.setProperty("animation-delay", "-14s");
      slide5.style.setProperty("animation-delay", "-11s");
      slide6.style.setProperty("animation-delay", "-8s");
      slide7.style.setProperty("animation-delay", "-5s");
      slide8.style.setProperty("animation-delay", "-2s");
      slide9.style.setProperty("animation-delay", "-29s");
      slide10.style.setProperty("animation-delay", "-26s");
      slide11.style.setProperty("animation-delay", "-23s");
      slide12.style.setProperty("animation-delay", "-20s");
      slide13.style.setProperty("animation-delay", "-17s");
    }
    if (leftMargin < -8 * imageSize && leftMargin > -9 * imageSize) {
      slider.style.setProperty("animation-delay", "-23s");

      slide1.style.setProperty("animation-delay", "-26s");
      slide2.style.setProperty("animation-delay", "-23s");
      slide3.style.setProperty("animation-delay", "-20s");
      slide4.style.setProperty("animation-delay", "-17s");
      slide5.style.setProperty("animation-delay", "-14s");
      slide6.style.setProperty("animation-delay", "-11s");
      slide7.style.setProperty("animation-delay", "-8s");
      slide8.style.setProperty("animation-delay", "-5s");
      slide9.style.setProperty("animation-delay", "-2s");
      slide10.style.setProperty("animation-delay", "-29s");
      slide11.style.setProperty("animation-delay", "-26s");
      slide12.style.setProperty("animation-delay", "-23s");
      slide13.style.setProperty("animation-delay", "-20s");
    }
    if (leftMargin < -9 * imageSize && leftMargin > -10 * imageSize) {
      slider.style.setProperty("animation-delay", "-26s");

      slide1.style.setProperty("animation-delay", "-29s");
      slide2.style.setProperty("animation-delay", "-26s");
      slide3.style.setProperty("animation-delay", "-23s");
      slide4.style.setProperty("animation-delay", "-20s");
      slide5.style.setProperty("animation-delay", "-17s");
      slide6.style.setProperty("animation-delay", "-14s");
      slide7.style.setProperty("animation-delay", "-11s");
      slide8.style.setProperty("animation-delay", "-8s");
      slide9.style.setProperty("animation-delay", "-5s");
      slide10.style.setProperty("animation-delay", "-2s");
      slide11.style.setProperty("animation-delay", "-26s");
      slide12.style.setProperty("animation-delay", "-23s");
      slide13.style.setProperty("animation-delay", "-20s");
    }
    sliderElement.appendChild(sliderContainer);
  }

  function setSliderRight() {
    let slider = document.getElementById("image-slider");
    let sliderElement = document.getElementById("slider-element");
    let sliderContainer = document.getElementById("slider-container");

    let imageSize = (window.innerWidth / 100) * 33.333333;
    let compStyles = window.getComputedStyle(slider);
    let leftMarginPX = compStyles.marginLeft;

    let leftMarginString = leftMarginPX.replace("px", "");
    let leftMargin = parseFloat(leftMarginString);

    let slide1 = document.getElementById("slide-image-1");
    let slide2 = document.getElementById("slide-image-2");
    let slide3 = document.getElementById("slide-image-3");
    let slide4 = document.getElementById("slide-image-4");
    let slide5 = document.getElementById("slide-image-5");
    let slide6 = document.getElementById("slide-image-6");
    let slide7 = document.getElementById("slide-image-7");
    let slide8 = document.getElementById("slide-image-8");
    let slide9 = document.getElementById("slide-image-9");
    let slide10 = document.getElementById("slide-image-10");
    let slide11 = document.getElementById("slide-image-11");
    let slide12 = document.getElementById("slide-image-12");
    let slide13 = document.getElementById("slide-image-13");

    sliderContainer.parentElement.removeChild(sliderContainer);

    if (leftMargin < 0 && leftMargin > -imageSize) {
      slider.style.setProperty("animation-delay", "-3s");

      slide1.style.setProperty("animation-delay", "-6s");
      slide2.style.setProperty("animation-delay", "-3s");
      slide3.style.setProperty("animation-delay", "0s");
      slide4.style.setProperty("animation-delay", "-27s");
      slide5.style.setProperty("animation-delay", "-24s");
      slide6.style.setProperty("animation-delay", "-21s");
      slide7.style.setProperty("animation-delay", "-18s");
      slide8.style.setProperty("animation-delay", "-15s");
      slide9.style.setProperty("animation-delay", "-12s");
      slide10.style.setProperty("animation-delay", "-9s");
      slide11.style.setProperty("animation-delay", "-6s");
      slide12.style.setProperty("animation-delay", "-3s");
      slide13.style.setProperty("animation-delay", "0s");
    }
    if (leftMargin < -imageSize && leftMargin > -2 * imageSize) {
      slider.style.setProperty("animation-delay", "-6s");

      slide1.style.setProperty("animation-delay", "-9s");
      slide2.style.setProperty("animation-delay", "-6s");
      slide3.style.setProperty("animation-delay", "-3s");
      slide4.style.setProperty("animation-delay", "0s");
      slide5.style.setProperty("animation-delay", "-27s");
      slide6.style.setProperty("animation-delay", "-24s");
      slide7.style.setProperty("animation-delay", "-21s");
      slide8.style.setProperty("animation-delay", "-18s");
      slide9.style.setProperty("animation-delay", "-15s");
      slide10.style.setProperty("animation-delay", "-12s");
      slide11.style.setProperty("animation-delay", "-9s");
      slide12.style.setProperty("animation-delay", "-6s");
      slide13.style.setProperty("animation-delay", "-3s");
    }
    if (leftMargin < -2 * imageSize && leftMargin > -3 * imageSize) {
      slider.style.setProperty("animation-delay", "-9s");

      slide1.style.setProperty("animation-delay", "-12s");
      slide2.style.setProperty("animation-delay", "-9s");
      slide3.style.setProperty("animation-delay", "-6s");
      slide4.style.setProperty("animation-delay", "-3s");
      slide5.style.setProperty("animation-delay", "0s");
      slide6.style.setProperty("animation-delay", "-27s");
      slide7.style.setProperty("animation-delay", "-24s");
      slide8.style.setProperty("animation-delay", "-21s");
      slide9.style.setProperty("animation-delay", "-18s");
      slide10.style.setProperty("animation-delay", "-15s");
      slide11.style.setProperty("animation-delay", "-12s");
      slide12.style.setProperty("animation-delay", "-9s");
      slide13.style.setProperty("animation-delay", "-6s");
    }
    if (leftMargin < -3 * imageSize && leftMargin > -4 * imageSize) {
      slider.style.setProperty("animation-delay", "-12s");

      slide1.style.setProperty("animation-delay", "-15s");
      slide2.style.setProperty("animation-delay", "-12s");
      slide3.style.setProperty("animation-delay", "-9s");
      slide4.style.setProperty("animation-delay", "-6s");
      slide5.style.setProperty("animation-delay", "-3s");
      slide6.style.setProperty("animation-delay", "0s");
      slide7.style.setProperty("animation-delay", "-27s");
      slide8.style.setProperty("animation-delay", "-24s");
      slide9.style.setProperty("animation-delay", "-21s");
      slide10.style.setProperty("animation-delay", "-18s");
      slide11.style.setProperty("animation-delay", "-15s");
      slide12.style.setProperty("animation-delay", "-12s");
      slide13.style.setProperty("animation-delay", "-9s");
    }
    if (leftMargin < -4 * imageSize && leftMargin > -5 * imageSize) {
      slider.style.setProperty("animation-delay", "-15s");

      slide1.style.setProperty("animation-delay", "-18s");
      slide2.style.setProperty("animation-delay", "-15s");
      slide3.style.setProperty("animation-delay", "-12s");
      slide4.style.setProperty("animation-delay", "-9s");
      slide5.style.setProperty("animation-delay", "-6s");
      slide6.style.setProperty("animation-delay", "-3s");
      slide7.style.setProperty("animation-delay", "0s");
      slide8.style.setProperty("animation-delay", "-27s");
      slide9.style.setProperty("animation-delay", "-24s");
      slide10.style.setProperty("animation-delay", "-21s");
      slide11.style.setProperty("animation-delay", "-18s");
      slide12.style.setProperty("animation-delay", "-15s");
      slide13.style.setProperty("animation-delay", "-12s");
    }
    if (leftMargin < -5 * imageSize && leftMargin > -6 * imageSize) {
      slider.style.setProperty("animation-delay", "-18s");

      slide1.style.setProperty("animation-delay", "-21s");
      slide2.style.setProperty("animation-delay", "-18s");
      slide3.style.setProperty("animation-delay", "-15s");
      slide4.style.setProperty("animation-delay", "-12s");
      slide5.style.setProperty("animation-delay", "-9s");
      slide6.style.setProperty("animation-delay", "-6s");
      slide7.style.setProperty("animation-delay", "-3s");
      slide8.style.setProperty("animation-delay", "0s");
      slide9.style.setProperty("animation-delay", "-27s");
      slide10.style.setProperty("animation-delay", "-24s");
      slide11.style.setProperty("animation-delay", "-21s");
      slide12.style.setProperty("animation-delay", "-18s");
      slide13.style.setProperty("animation-delay", "-15s");
    }
    if (leftMargin < -6 * imageSize && leftMargin > -7 * imageSize) {
      slider.style.setProperty("animation-delay", "-21s");

      slide1.style.setProperty("animation-delay", "-24s");
      slide2.style.setProperty("animation-delay", "-21s");
      slide3.style.setProperty("animation-delay", "-18s");
      slide4.style.setProperty("animation-delay", "-15s");
      slide5.style.setProperty("animation-delay", "-12s");
      slide6.style.setProperty("animation-delay", "-9s");
      slide7.style.setProperty("animation-delay", "-6s");
      slide8.style.setProperty("animation-delay", "-3s");
      slide9.style.setProperty("animation-delay", "0s");
      slide10.style.setProperty("animation-delay", "-27s");
      slide11.style.setProperty("animation-delay", "-24s");
      slide12.style.setProperty("animation-delay", "-21s");
      slide13.style.setProperty("animation-delay", "-18s");
    }
    if (leftMargin < -7 * imageSize && leftMargin > -8 * imageSize) {
      slider.style.setProperty("animation-delay", "-24s");

      slide1.style.setProperty("animation-delay", "-27s");
      slide2.style.setProperty("animation-delay", "-24s");
      slide3.style.setProperty("animation-delay", "-21s");
      slide4.style.setProperty("animation-delay", "-18s");
      slide5.style.setProperty("animation-delay", "-15s");
      slide6.style.setProperty("animation-delay", "-12s");
      slide7.style.setProperty("animation-delay", "-9s");
      slide8.style.setProperty("animation-delay", "-6s");
      slide9.style.setProperty("animation-delay", "-3s");
      slide10.style.setProperty("animation-delay", "0s");
      slide11.style.setProperty("animation-delay", "-27s");
      slide12.style.setProperty("animation-delay", "-24s");
      slide13.style.setProperty("animation-delay", "-21s");
    }
    if (leftMargin < -8 * imageSize && leftMargin > -9 * imageSize) {
      slider.style.setProperty("animation-delay", "-27s");

      slide1.style.setProperty("animation-delay", "0s");
      slide2.style.setProperty("animation-delay", "-27s");
      slide3.style.setProperty("animation-delay", "-24s");
      slide4.style.setProperty("animation-delay", "-21s");
      slide5.style.setProperty("animation-delay", "-18s");
      slide6.style.setProperty("animation-delay", "-15s");
      slide7.style.setProperty("animation-delay", "-12s");
      slide8.style.setProperty("animation-delay", "-9s");
      slide9.style.setProperty("animation-delay", "-6s");
      slide10.style.setProperty("animation-delay", "-3s");
      slide11.style.setProperty("animation-delay", "0s");
      slide12.style.setProperty("animation-delay", "-27s");
      slide13.style.setProperty("animation-delay", "-24s");
    }
    if (leftMargin < -9 * imageSize && leftMargin > -10 * imageSize) {
      slider.style.setProperty("animation-delay", "0s");

      slide1.style.setProperty("animation-delay", "-3s");
      slide2.style.setProperty("animation-delay", "0s");
      slide3.style.setProperty("animation-delay", "-27s");
      slide4.style.setProperty("animation-delay", "-24s");
      slide5.style.setProperty("animation-delay", "-21s");
      slide6.style.setProperty("animation-delay", "-18s");
      slide7.style.setProperty("animation-delay", "-15s");
      slide8.style.setProperty("animation-delay", "-12s");
      slide9.style.setProperty("animation-delay", "-9s");
      slide10.style.setProperty("animation-delay", "-6s");
      slide11.style.setProperty("animation-delay", "-3s");
      slide12.style.setProperty("animation-delay", "0s");
      slide13.style.setProperty("animation-delay", "-27s");
    }

    sliderElement.appendChild(sliderContainer);
  }
  return (
    <div id="slider-element">
      <div
        className="slider-container hidden-mobile-slider"
        id="slider-container"
      >
        <div className="control-container">
          <span
            className="controls control-left"
            id="control"
            onClick={() => setSliderLeft()}
          >
            &#60;
          </span>
          <span
            className="controls control-right"
            onClick={() => setSliderRight()}
          >
            &#62;
          </span>
        </div>
        <div className="image-slider" id="image-slider">
          <div className="slide-image-container">
            <img src={img1} className="slide-image" id="slide-image-1" />
          </div>
          <div className="slide-image-container">
            <img src={img2} className="slide-image" id="slide-image-2" />
          </div>
          <div className="slide-image-container">
            <img src={img3} className="slide-image" id="slide-image-3" />
          </div>
          <div className="slide-image-container">
            <img src={img4} className="slide-image" id="slide-image-4" />
          </div>
          <div className="slide-image-container">
            <img src={img5} className="slide-image" id="slide-image-5" />
          </div>
          <div className="slide-image-container">
            <img src={img6} className="slide-image" id="slide-image-6" />
          </div>
          <div className="slide-image-container">
            <img src={img7} className="slide-image" id="slide-image-7" />
          </div>
          <div className="slide-image-container">
            <img src={img8} className="slide-image" id="slide-image-8" />
          </div>
          <div className="slide-image-container">
            <img src={img9} className="slide-image" id="slide-image-9" />
          </div>
          <div className="slide-image-container">
            <img src={img10} className="slide-image" id="slide-image-10" />
          </div>
          <div className="slide-image-container">
            <img src={img1} className="slide-image" id="slide-image-11" />
          </div>
          <div className="slide-image-container">
            <img src={img2} className="slide-image" id="slide-image-12" />
          </div>
          <div className="slide-image-container">
            <img src={img3} className="slide-image" id="slide-image-13" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
