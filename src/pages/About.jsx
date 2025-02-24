import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/About.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container-fluid background h-100 mt-5">
        <div className="container">
          {/* About section start */}

          <div className="row px-2 mt-4 ">
            <h1 className="text-center fonts text-white mt-5 head  thick-thin-underline">
              Know About Me
            </h1>
            <h4 className=" text-white font text-center  heading1">
              <span className="heading2 px-2">Who I am</span>
            </h4>

            <div className="col-md-6  aboutText px-lg-2 mt-5 order-lg-1 order-2 ">
              <h3>
                Hi Everyone, I'm{" "}
                <span className="highlight3">Saksham Shrivastava</span> from
                <span className="highlight3"> Gwalior, India.</span>
              </h3>
              <h3>
                A recent B.C.A. graduate (class of 2024) from Adarsh Science
                College, I am passionate about
                <span className="highlight3"> Full Stack Development</span> and
                committed to crafting seamless, user-centric online experiences.
              </h3>
              <h3>
                Currently, I’m a Software Developer Intern at{" "}
                <span className="highlight3">ParkSpot</span>, where I’ve
                optimized application performance, built scalable REST APIs, and
                introduced 10+ new features to enhance user engagement.
              </h3>
              <h3>
                As a contributor to{" "}
                <span className="highlight3">
                  GirlScript Summer of Code 2024
                </span>
                , I collaborated with developers to resolve 40+ bugs, develop
                interactive features, and optimize workflows.
              </h3>
              <h3>
                My projects, like <span className="highlight3">SecretSend</span>{" "}
                and <span className="highlight3">Sketch Book</span>, showcase my
                expertise in React.js, Next.js, MongoDB, and REST APIs. I aspire
                to make a meaningful impact by building innovative digital
                solutions that drive engagement and satisfaction.
              </h3>
            </div>
            <div className="col-md-6  px-5 order-lg-2 order-1 ">
              <img
                src="https://sagarmude.netlify.app/static/media/about.5e4e5236.svg"
                alt="profileimage"
                className="img-fluid"
              />
            </div>
          </div>

          {/* About section end */}

          {/* Project Section */}
        </div>
      </div>
    </>
  );
}

export default About;
