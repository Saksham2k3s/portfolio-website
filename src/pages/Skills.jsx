import React, { useEffect, useState } from "react";
import "../style/Skills.css";
import "../App.css";
import data from "../data/SkillsData.json";
function Skills() {
  const [frotendSkills, setFrontendSkills] = useState([]);
  const [backendSkills, setBackendSkills] = useState([]);
  const [database, setDatabase] = useState([]);
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const frontendSkills = data.filter(
      (skill) => skill.category === "frontend"
    );
    setFrontendSkills(frontendSkills);
    const BackendSkills = data.filter((skill) => skill.category === "Backend");
    setBackendSkills(BackendSkills);
    const dataBase = data.filter((skill) => skill.category === "Database");
    setDatabase(dataBase);
    const Tools = data.filter((skill) => skill.category === "Tools");
    setTools(Tools);
  }, []);
  return (
    <>
      <div className="container-fluid project background mt-5 pt-2 pb-5">
        <div class="container ">
          <h1 className="text-center h1 fonts text-white mt-5 head  thick-thin-underline">
            My Skills
          </h1>
          <h4 className=" text-white font text-center  heading1">
            <span className="heading2 px-2">What I'v learned</span>
          </h4>

          <div className="skills-container">
            <h4 className=" text-white font text-center  heading1">
              <span className="heading2 px-2">Frontend</span>
            </h4>
            <div className="skills-box mt-3">
              {frotendSkills.map((skill, idx) => {
                return (
                  <img
                    src={skill.img}
                    alt=""
                    className="img-fluid skill-img mx-3"
                    key={idx}
                  />
                );
              })}
            </div>

            <h4 className=" text-white font text-center  heading1 mt-5">
              <span className="heading2 px-2 mt-5">Backend</span>
            </h4>
            <div className="skills-box mt-3">
              {backendSkills.map((skill, idx) => {
                return (
                  <img
                    src={skill.img}
                    alt=""
                    className="img-fluid skill-img mx-3"
                    key={idx}
                  />
                );
              })}
            </div>
            <h4 className=" text-white font text-center  heading1 mt-5">
              <span className="heading2 px-2 mt-5">Database</span>
            </h4>
            <div className="skills-box mt-3">
              {database.map((skill, idx) => {
                return (
                  <img
                    src={skill.img}
                    alt=""
                    className="img-fluid skill-img mx-3"
                    key={idx}
                  />
                );
              })}
            </div>
            <h4 className=" text-white font text-center  heading1 mt-5">
              <span className="heading2 px-2 mt-5">Tools</span>
            </h4>
            <div className="skills-box mt-3">
              {tools.map((skill, idx) => {
                return (
                  <img
                    src={skill.img}
                    alt=""
                    className="img-fluid skill-img mx-3"
                    key={idx}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
