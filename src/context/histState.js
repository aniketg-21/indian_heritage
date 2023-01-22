import { useState } from "react";
import HistContext from "./histContext";

const HistState = (props) => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  const host = "http://localhost:5000";
  let [heritageSite, setHeritageSite] = useState([]);
  let [reviews, setReviews] = useState([]);

  const fetchTop = async () => {
    const response = await fetch(`${host}/api/heritages/top10`);
    const json = await response.json();
    setHeritageSite(json);
  };

  const fetchAll = async () => {
    const response = await fetch(`${host}/api/heritages/`);
    const json = await response.json();
    setHeritageSite(json);
  };

  const fetchByType = async (type) => {
    const response = await fetch(`${host}/api/heritages/filter/${type}`);
    const json = await response.json();
    setHeritageSite(json);
  };

  const fetchById = async (id) => {
    const response = await fetch(`${host}/api/heritages/${id}`);
    const json = await response.json();
    setHeritageSite(json);
  };

  const fetchAllReviews = async () => {
    const response = await fetch(`${host}/api/reviews/`);
    const json = await response.json();
    setReviews(json);
  };

  const postReview = async (eID, comment) => {
    const response = await fetch(`${host}/api/reviews/addcomment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ eID, comment }),
    });
    const json = await response.json();
    if (response.status === 400) {
      return showAlert(json.errors[0].msg, "danger");
    }
    setReviews(reviews.concat(json));
  };

  return (
    <HistContext.Provider
      value={{
        alert,
        showAlert,
        heritageSite,
        fetchTop,
        fetchAll,
        fetchByType,
        fetchById,
        fetchAllReviews,
        reviews,
        postReview,
      }}
    >
      {props.children}
    </HistContext.Provider>
  );
};

export default HistState;
