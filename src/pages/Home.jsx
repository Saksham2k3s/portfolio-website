import "../style/Home.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { RESUME_URL } from "../helper/constant";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import AOS from "aos";
import React, { useEffect } from "react";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading-div align-middle ">
          <PulseLoader
            aria-label="Loading Spinner"
            color={"#01ffea"}
            data-testid="loader"
            loading={loading}
            size={30}
          />
        </div>
      ) : (
        <div className="container pt-5 mt-5">
          <div className="row">
            <div className="col-md-2"></div>
            <div
              className="col-md-8 sec-1 pt-5 "
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h5 className="h3"> 👋 Hii, my name is</h5>
              <h1 className="display-4 text-white">Saksham Shrivastava.</h1>
              <h1 className="display-4 text-white">
                I am a{" "}
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "Open Source Contributor",
                    "Full Stack Developer",
                    "Software Developer"
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="pr-2 text-white">
                As a <span className="highlight">Software Developer</span>, I
                thrive on building
                <span className="highlight">intuitive</span> and innovative web
                solutions that deliver seamless user experiences and drive
                engagement.
              </p>
              <Link
                className="nav-item ms-auto"
                target="_blank"
                to={RESUME_URL}
              >
                <button className="h-btn fonts nav-item ms-auto p-2 ">
                  <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                    Resume
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
