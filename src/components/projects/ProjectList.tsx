import React, { useState, useRef } from "react";
import insDashboard from "../../assets/insights/Insights Dashboard.jpg";
import insAnalytics from "../../assets/insights/Insights Analytics.jpg";
import insReport from "../../assets/insights/Insights Report.jpg";
import sfLanding from "../../assets/spot-fiend/Spot Fiend Landing.png";
import sfHome from "../../assets/spot-fiend/Spot Fiend Home.png";
import cqLanding from "../../assets/concert-quest/Concert Quest Landing.png";
import Project from "./Project";

export interface ProjectInfo {
  id: number;
  heading: string;
  content: string;
  images: { alt: string; image: string }[];
  year: string;
  team?: string;
  stack: string;
}

const Accordion: React.FC = () => {
  const items: ProjectInfo[] = [
    {
      id: 1,
      heading: "Snap! Insights",
      content:
        "Snap! Insights, a web application for efficient fundraising management, simplifies tracking, comparison, and evaluation of vital statistics through intuitive graphical interfaces and comprehensive data analysis, enabling informed, data-driven decisions for enhanced fundraising strategies and greater impact.",
      images: [
        { alt: "Insights Dashboard", image: insDashboard },
        { alt: "Insights Analytics", image: insAnalytics },
        { alt: "insights Report", image: insReport },
      ],
      year: "2022-2023",
      team: "Sebastian Gamboa, Sasha Aktuganova",
      stack: "React, TypeScript, NodeJS, GraphQL",
    },
    {
      id: 2,
      heading: "Spot Fiend",
      content:
        "Spot Fiend, a platform for skaters, streamlines spot sharing and discovery. Using React, JS, Sass, NodeJS, and PostgreSQL, it offers an interactive map (Mapbox and Google Maps) for finding nearby spots. Users create spots, upload images via Cloudinary, and pinpoint locations with Google Maps Geocoding API, all showcased on the map. Manage and personalize posted spots with ease.",
      images: [
        { alt: "Spot Fiend Landing", image: sfLanding },
        { alt: "Spot Fiend Home Page", image: sfHome },
      ],
      year: "2019",
      stack: "React, JavaScript, NodeJS, PostgreSQL",
    },
    {
      id: 3,
      heading: "Concert Quest",
      content:
        "Concert Quest, a web app for music lovers, streamlines concert discovery. It utilizes BandsInTown API to display upcoming concerts for a chosen artist. Users can save favorites, aiding in tracking new announcements. Developed using React, Node, Express, and PostgreSQL, ensuring a delightful user journey.",
      images: [{ alt: "Concert Quest Landing", image: cqLanding }],
      year: "2019",
      team: "Madelyn Arsenault, Noel Contreras",
      stack: "React, JavaScript, NodeJS, PostgreSQL",
    },
  ];

  const [activeItem, setActiveItem] = useState<number | null>(null);

  const projectRef = useRef<HTMLDivElement | null>(null);

  const scrollToProject = () => {
    projectRef.current &&
      projectRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
            className={`flex flex-col justify-between items-center p-6 cursor-pointer ${
              activeItem === item.id ? "text-secondary" : "text-primary"
            }`}
            onClick={() => toggleAccordion(item.id)}
          >
            <h1
              className="text-6xl font-bold hover:text-secondary transition-all cursor-pointer max-w-screen-lg w-screen"
              onClick={scrollToProject}
            >
              {item.heading}
            </h1>
          </section>
          <Project
            ref={projectRef}
            activeItem={activeItem as number}
            item={item}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
