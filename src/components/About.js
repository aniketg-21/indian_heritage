import React from "react";

const About = () => {
  return (
    <div className="container mt-5 vh-100">
      <h4 className="bg-success text-light p-2 rounded">
        Digital documentation of forts and heritage monuments of the State using
        emerging technologies.
      </h4>
      <p>
        Some Indian States possesses a rich cultural heritage whose history goes
        back more than two millennia. Conventionally history of culture and
        heritage has been studied from various sources such as inscriptions,
        writings, records, literature, art and architecture. Modern technology
        has added other means through which cultural and heritage information
        can be captured digitally which can complement and supplement
        information gleaned from conventional sources.
      </p>
      <ul>
        <li>
          This web application allows a user to know all about a particular
          historic monument and temple.
        </li>
        <li>One can post their photos of the place they visited.</li>
        <li>
          One my register / create an account before they can post anything.
        </li>
        <li>
          The currently posted pics can let officials know what is the current
          state of that place. Does it needs some restoring or cleanup?
        </li>
        <li>This also helps in increasing tourism.</li>
      </ul>
      <div className="text-center mb-2">
        <span className="p-1 bg-dark text-light">
          This is a team project by - The Dreamers, Sandip University.
        </span>
      </div>
    </div>
  );
};

export default About;
