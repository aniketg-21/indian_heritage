import React, { useContext, useEffect } from "react";
import "../App.css";
import histContext from "../context/histContext";
import { useParams } from "react-router-dom";

const DetailView = () => {
  const context = useContext(histContext);
  const { heritageSite, fetchById, fetchAllReviews, reviews, postReview } =
    context;
  let { id } = useParams();
  useEffect(() => {
    if (id != undefined) {
      fetchById(id);
      if (localStorage.getItem("token")) {
        fetchAllReviews();
        document.getElementById("save").disabled = false;
      } else {
        fetchAllReviews();
        document.getElementById("save").disabled = true;
      }
    }
  }, [localStorage.getItem("token")]);
  let { name, location, period, image_link, description, tips, tag } =
    heritageSite;

  const handleClick = () => {
    if (localStorage.getItem("token")) {
      postReview(
        localStorage.getItem("eID"),
        document.getElementById("comment").value
      );
    }
  };

  return (
    <div className="container my-3 h-100">
      <div className="row">
        <div className="col-md-8">
          <h5 className="card p-2">
            <div className="row">
              <span className="col">
                {name}, {location}
              </span>
              <span className="col text-end fw-normal fs-6">
                <i>{period}</i>
              </span>
            </div>
          </h5>
          <img
            src={image_link}
            className="shadow w-100 mb-3"
            alt="Not found!"
            style={{ height: "26rem" }}
          />
          <a
            className="btn btn-light w-100 mb-3 border"
            id="map"
            href={
              "https://www.google.co.in/maps/search/" +
              String(name).replace(" ", "+")
            }
            target="_blank"
            rel="noreferrer"
          >
            <img src="./images/map-icon.jpg" width={32} />
          </a>
          <p className="card card-body">{description}</p>
        </div>
        <div className="col-md-4">
          <div className="card card-body">
            <h5>TIPS and Recommendations</h5>
            <div>{tips}</div>
          </div>
          <div className="card text-center">
            <span className="bg-warning">{tag}</span>
          </div>
          <div className="card card-body">
            <div className="row">
              <h5 className="col">Reviews</h5>
              <button
                className="col-3 me-3 btn btn-sm btn-success"
                id="save"
                onClick={handleClick}
              >
                Save
              </button>
            </div>
            <div className="my-2 form-floating">
              <textarea
                className="form-control"
                id="comment"
                name="comment"
                rows="3"
              ></textarea>
              <label htmlFor="comment" className="form-label">
                Post a Review
              </label>
              {!localStorage.getItem("token") ? (
                <small>
                  <i>(Login to post a review.)</i>
                </small>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="card card-body my-3" id="reviews">
            {reviews.length > 0
              ? reviews.map((value, i) => {
                  return (
                    <div key={i}>
                      <small className="text-muted">{value.eID}</small>
                      <p className="border-bottom">{value.comment}</p>
                    </div>
                  );
                })
              : "No reviews added yet. Be the first one to add one!"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
