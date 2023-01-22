import React, { useState } from "react";
import { Link } from "react-router-dom";

function Item(props) {
  let [view, setView] = useState({ name: "", view360: "" });
  let { _id, name, location, period, image_link } = props.heritage;
  const handleClick = () => {
    setView({ name: name, view360: props.heritage["360view"] });
  };

  return (
    <>
      <div className="card rounded places">
        <h5 className="card-header">{name}</h5>
        <div className="d-flex position-absolute" style={{ right: 0 }}>
          <span className="translate-middle badge rounded-pill bg-danger">
            {location}
            <span className="visually-hidden">source name</span>
          </span>
        </div>
        <img
          src={image_link}
          className="img-fluid shadow "
          alt="Not found!"
          style={{ height: "16rem" }}
        />
        <p className=" text-muted text-center mb-0">
          <i>{period}</i>
        </p>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <Link className="btn btn-outline-primary" to={"/" + _id}>
              Explore
            </Link>
            <button
              className="btn btn-dark btn-sm"
              data-bs-target={"#viewModal" + _id}
              data-bs-toggle="modal"
              onClick={handleClick}
            >
              360°{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id={"viewModal" + _id}
        tabIndex="-1"
        aria-labelledby="viewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="viewModalLabel">
                {view.name}{" "}
                <small className="fs-6 fw-normal">
                  <i>
                    (Click and hold the image and move the cursor to see 360°
                    View)
                  </i>
                </small>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {view.view360 ? (
                <iframe
                  src={view.view360}
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                "Sorry, 360° view of this site is not available right now!"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
