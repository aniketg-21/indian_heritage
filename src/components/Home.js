import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import histContext from "../context/histContext";
import Spinner from "./Spinner";

const Home = () => {
  const context = useContext(histContext);
  const { heritageSite, fetchTop } = context;

  useEffect(() => {
    fetchTop();
    console.log(document.getElementsByClassName("vh-100")[0])
  }, []);

  return (
    <>
      <div className="bg-winter text-light text-center px-5 py-4 m-0">
        <h2>Indian Heritage</h2>
        <p>
          <i>ANCIENT HISTORY COMES ALIVE HERE</i>
        </p>
        <p>
          The rich heritage of India, one of the world's oldest civilizations,
          is an all-embracing confluence of religions, traditions and customs.
          The highlights of Indian heritage lie in the treasure of its art,
          architecture, classical dance, music, flora and fauna, and the innate
          secular philosophy of its people.
        </p>
      </div>  
      <div className="container my-4 h-100">
        <div className="row mt-5 border-start border-4 border-info">
          <h3>Top 10 Heritage Places</h3>
        </div>
        <div
          className="row g-3 mt-2 mb-4 flex-nowrap"
          style={{ overflowX: "scroll" }}
        >
          {heritageSite.length > 0
            ? heritageSite.map((value, i) => {
                return (
                  <div className="col" key={i}>
                    <div className="d-flex position-relative">
                      <div className="front">
                        <span className="badge position-absolute bottom-0 bg-light text-dark text-wrap">
                          {value.name}
                        </span>
                        <img
                          src={value.image_link}
                          className="rounded-bottom"
                          alt={value.name}
                        />
                      </div>
                      <div className="cslide card card-body rounded-0">
                        <p className="card-text">
                          {value.description.substr(0, 100)}...
                        </p>
                        <Link className="card-link" to={"/" + value._id}>
                          Continue reading →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="row mt-5 border-start border-4 border-info">
          <h3>Major Tourist Attractions</h3>
        </div>
        <div className="row my-4 pt-3">
          <div className="col-lg-4 mb-3">
            <img
              src="../images/unity.jpg"
              className="img-fluid rounded shadow"
              alt="Statue of Unity"
            />
          </div>
          <div className="col-lg-8">
            <h4>Statue of Unity, Gujarat</h4>
            <p>
              “India’s first deputy prime minister, bharat ratna sardar
              vallabhbhai patel, who with his firm determination, could
              transform such imperialism into today’s unified india. People of
              india will remain indebted to him forever for his leadership
              during the freedom struggle and his vision, wisdom and
              statesmanship in the post-independence era. His life is an eternal
              source of inspiration for the present as well as future
              generations and it is in this context that his iconic monumental
              statue – the world’s tallest statue of unity has been dedicated to
              the nation on the 143rd birth anniversary. Symbolizing the
              national, spiritual, historical and academic values, the statue of
              unity will lead to the icon-based development of this entire
              region, which is predominantly a tribal area.”
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-8">
            <h4>Raigad Fort, Maharashtra</h4>
            <p>
              “Raigad is a hill fort situated at about 25 Km from Mahad in the
              Raigad district. Chhatrapati Shivaji renovated this fort and made
              it his capital in 1674 AD. The rope-way facility is available at
              Raigad Fort, to reach at the fort from ground in few minutes. The
              fort also overlooks an artificial lake known as the ‘Ganga Sagar
              Lake’. The only main pathway to the fort passes through the “Maha
              Darwaja” (Huge Door). The King’s durbar inside the Raigad Fort has
              a replica of the original throne that faces the main doorway
              called the Nagarkhana Darwaja. This enclosure had been
              acoustically designed to aid hearing from the doorway to the
              throne. The fort has a famous bastion called “Hirakani Buruj”
              (Hirkani Bastion) constructed over a huge steep cliff.”
            </p>
          </div>
          <div className="col-lg-4 mb-3">
            <img
              src="../images/raigad.jpg"
              className="img-fluid rounded shadow"
              alt="Raigad Fort"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-4 mb-3">
            <img
              src="../images/ayodhaya.jpg"
              className="img-fluid rounded shadow"
              alt="Ayodhaya"
            />
          </div>
          <div className="col-lg-8">
            <h4>Ram Mandir, Uttar Pradesh</h4>
            <p>
              “Ram Mandir is a Hindu temple that is being built in Ayodhya,
              Uttar Pradesh, India, at the site of Ram Janmabhoomi, according to
              the Ramayana the birthplace of Rama, a principal deity of
              Hinduism. The temple construction is being supervised by the Shri
              Ram Janmabhoomi Teerth Kshetra. The ground-breaking ceremony was
              performed on 5 August 2020 by India’s prime minister Narendra
              Modi. The temple premises will include temples dedicated to
              deities Surya, Ganesha, Shiva, Durga, Vishnu and Brahma.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
