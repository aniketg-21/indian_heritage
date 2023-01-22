import React, { useContext, useEffect } from "react";
import Item from "./Item";
import histContext from "../context/histContext";
import { useParams } from "react-router-dom";

const Monument = () => {
  const context = useContext(histContext);
  const { heritageSite, fetchByType } = context;
  let { type } = useParams();

  useEffect(() => {
    fetchByType(type);
  }, [type]);

  const handleChange = (e) => {
    Array.from(document.getElementsByClassName("places")).forEach((ele, i) => {
      if (
        !ele.firstChild.innerText
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
        ele.parentElement.hidden = true;
      else ele.parentElement.hidden = false;
    });
  };

  return (
    <div className="container my-3 vh-100 overflow-auto">
      <div className="row my-4">
        <div className="col">
          <h3>{type[0].toUpperCase() + type.substring(1)}s</h3>
        </div>
        <div className="col">
          <input
            className="form-control form-control-sm"
            type="search"
            id="search"
            placeholder="🔍"
            aria-label="Search"
            style={{ float: "right" }}
            onInputCapture={handleChange}
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        {heritageSite.length > 0
          ? heritageSite.map((value, i) => {
              return (
                <div className="col my-3" key={i}>
                  <Item heritage={value} />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Monument;
