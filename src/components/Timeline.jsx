import React from "react";
import { experience } from "../helper/constant";
function Timeline() {
  return (
    <>
      <div className="timeline">
        {experience.map((data, key) => {
          return (
            <div className="timeline-container">
              <div className="circle"></div>
              <div className="text-box">
                <h2 className="company" >{data.company}</h2>
                <div className="roleDuration">
                  <div className="role">{data.role}</div>
                  <div className="duration">{data.duration}</div>
                </div>
                <div className="description">
                  <ul>
                    {data.description.map((point, key) => (
                      <li key={key}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Timeline;
