import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide col-md-8"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="./images/raigad.jpg"
            className="d-block w-100 vh-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="./images/ayodhaya.jpg"
            className="d-block w-100 vh-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./images/unity.jpg"
            className="d-block w-100 vh-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
