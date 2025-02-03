import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./css/timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1 className="text-center text-2xl font-bold">Company Timeline</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "#fff", color: "#000" }}
          date="January 2025"
          iconStyle={{ background: "#00AEEF", color: "#fff" }}
          icon={<FaClock />}
        />
        
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{ background: "#00AEEF", color: "#fff" }}
          icon={<FaSearch />}
        >
          <h3 className="vertical-timeline-element-title">Mr. Bharathkumar Ramachandiran</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{ background: "#00AEEF", color: "#fff" }}
          icon={<FaEye />}
        >
          <h3 className="vertical-timeline-element-title">
            Engineering products with advanced technologies for an innovative future
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{ background: "#00AEEF", color: "#fff" }}
          icon={<FaCogs />}
        >
          <h3 className="vertical-timeline-element-title">
            Engineering excellence in medical devices and tech for an evolving global market.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
