import React, { useState, useRef, useEffect } from "react";
import insDashboard from "../assets/insights/Insights Dashboard.jpg";
import insAnalytics from "../assets/insights/Insights Analytics.jpg";
import insReport from "../assets/insights/Insights Report.jpg";
import sfLanding from "../assets/spot-fiend/Spot Fiend Landing.png";
import sfHome from "../assets/spot-fiend/Spot Fiend Home.png";

interface Project {
  id: number;
  heading: string;
  subHeading: string;
  content: string;
  images: string[];
}

const Accordion: React.FC = () => {
  const items: Project[] = [
    {
      id: 1,
      heading: "Snap! Insights",
      subHeading: "Sub-heading for Snap! Insights",
      content: "Content for Snap! Insights",
      images: [insDashboard, insAnalytics, insReport],
    },
    {
      id: 2,
      heading: "Spot-Fiend",
      subHeading: "Sub-heading for Spot-Fiend",
      content: "Content for Spot-Fiend",
      images: [sfLanding, sfHome],
    },
    {
      id: 3,
      heading: "Concert-Quest",
      subHeading: "Sub-heading for Concert-Quest",
      content: "Content for Concert-Quest",
      images: [],
    },
  ];

  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleAccordion = (itemId: number) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === itemId ? null : itemId
    );
  };

  return (
    <div className="accordion flex flex-col items-center">
      {items.map((item) => (
        <div key={item.id} className="select-none overflow-hidden">
          <section
            className={`flex flex-col justify-between items-center p-3 cursor-pointer ${
              activeItem === item.id ? "text-secondary" : "text-primary"
            }`}
            onClick={() => toggleAccordion(item.id)}
          >
            <h1 className="text-6xl font-bold hover:text-secondary transition-all cursor-pointer max-w-screen-lg w-screen">
              {item.heading}
            </h1>
          </section>
          <section
            className={`bg-secondary duration-700 ${
              activeItem === item.id ? "max-h-screen py-3" : "max-h-0"
            } transition-max-height w-screen flex flex-col items-center text-accent`}
          >
            <div className="max-w-screen-lg w-screen">
              <h2 className="font-bold text-2xl">{item.subHeading}</h2>
              <p className="text-2xl">{item.content}</p>
              <img
                src={item.images.length ? item.images[0] : ""}
                alt="Project Image"
                className={`transition-opacity duration-300 w-full ${
                  activeItem === item.id ? "py-3 opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
