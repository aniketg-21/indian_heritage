import React from "react";

const Contact = () => {
  return (
    <div className="container my-3 vh-100">
      <h4>Contact Form</h4>
      <span>Please fill the form given below.</span>
      <p>Our team will reach out to you soon.</p>
      <div className="card card-body">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNo" className="form-label">
              Phone number
            </label>
            <input type="text" className="form-control" id="phoneNo" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-12">
            <label htmlFor="query" className="form-label me-2">
              Your Query
            </label>
            <small>
              <i>(Describe the issue that you faced.)</i>
            </small>
            <textarea
              className="form-control"
              id="query"
            ></textarea>
          </div>
          <div className="col-12 text-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
