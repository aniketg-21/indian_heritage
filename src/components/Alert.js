import React, { useContext } from "react";
import histContext from "../context/histContext";

const Alert = () => {
  const context = useContext(histContext);
  const { alert } = context;
  const capitalizeMe = (word) =>{
    if (word==="danger"){
      return word = "Error";
    }
    return word.charAt(0).toUpperCase() +
    word.substr(1,);
  }
  return (
    <div>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show fixed-top`}
          role="alert"
        >
          <strong>
            {capitalizeMe(alert.type)}{" "}
            :
          </strong>
           {" "}{alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
};

export default Alert;
