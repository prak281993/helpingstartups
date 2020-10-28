import React from "react";
import "./Timeline.scss";

function Timeline({ data }) {
  return (
    <div className="container">
      <ul className="timeline">
        {data.map((item) => {
          return (
            <li className="timeline__item">
              <div className="timeline__badge">{item.number}</div>
              <div className="timeline__panel">
                <div className="timeline__panel-header">
                  <h2>{item.heading}</h2>
                </div>
                <div className="timeline__panel-content">
                  <p dangerouslySetInnerHTML={{__html:item.description}}></p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Timeline;
