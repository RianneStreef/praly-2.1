import React, { useState } from "react";

import "./Lightbox.css";

import xMark from "./images/xMark.png";
import left from "./images/left.png";
import right from "./images/right.png";

const Lightbox = (props) => {
  let images = props.lightboxImages;

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  function openLightbox(id) {
    setIsOpen(true);
    setCurrentImage(id);
  }

  function closeLightbox() {
    setIsOpen(false);
  }

  function setSliderLeft() {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length);
    }
  }
  function setSliderRight() {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  }

  const thumbnailListMobile = images.map((image) => {
    return (
      <>
        <img
          src={image.thumbnail}
          key={image.id}
          className="thumbnail-image"
          alt={image.alt}
        />
      </>
    );
  });

  const thumbnailList = images.map((image) => {
    return (
      <>
        <img
          src={image.thumbnail}
          key={image.id}
          onClick={() => openLightbox(image.id)}
          className="thumbnail-image"
          alt={image.alt}
        />
      </>
    );
  });

  const thumbnailListOpen = images.map((image) => {
    return (
      <>
        <img
          src={image.thumbnail}
          key={image.id}
          onClick={() => openLightbox(image.id)}
          className={`thumbnail-image-open ${
            currentImage === image.id ? "current-thumbnail" : ""
          }`}
          alt={image.alt}
        />
      </>
    );
  });

  return (
    <>
      <div className="thumbnail-list thumbnail-list-mobile">
        {thumbnailListMobile}
      </div>
      <div className="thumbnail-list-desktop">{thumbnailList}</div>
      {isOpen ? (
        <div className="lightbox">
          <img
            src={images[currentImage].src}
            className="lightbox-image"
            alt=""
          />
          <div className="thumbnail-list-open">{thumbnailListOpen}</div>
          <div className="control-container-lightbox">
            <div
              className="close-button-container"
              onClick={() => closeLightbox()}
            >
              <img className="close-button" src={xMark} alt="close button" />
            </div>
            <div className="left-right-controls-lightbox">
              <img
                src={left}
                onClick={() => setSliderLeft()}
                className="controls-lightbox control-left-lightbox"
                alt="left"
              />
              <img
                src={right}
                onClick={() => setSliderRight()}
                className="controls-lightbox control-right-lightbox"
              />
            </div>
            <div className="controls-placeholder" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Lightbox;
