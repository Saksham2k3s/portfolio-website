import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/About.css'

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container-fluid background h-100 mt-5">
        <div className="container">
           
           {/* About section start */}

          <div className="row px-2 mt-4">
            <h1 className="text-center fonts text-white mt-5 head  thick-thin-underline">
              Know About Me
            </h1>
            <h4 className=" text-white font text-center  heading1">
              <span className="heading2 px-2">Who I am</span>
            </h4>
           
           <div className="col-md-6  aboutText px-lg-5 mt-5 order-lg-1 order-2 ">
            <h3> Hii Everyone, I'm <span className="highlight3">Saksham Shrivastava</span> from <span className="highlight3">Gwalior, India.</span></h3>
            <h3> I am a B.C.A. graduate, class of 2024, from Adarsh Science College, Gwalior. Moreover, I have a strong interest in <span className="highlight3">Full Stack development</span>.</h3> 
            <h3> I aspire to become a proficient full stack developer and make a positive impact by creating innovative and user-centric online experiences.</h3>
            </div>
            <div className="col-md-6  px-5 order-lg-2 order-1 ">
            <img src='https://sagarmude.netlify.app/static/media/about.5e4e5236.svg' alt="profileimage" className="img-fluid" />
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
