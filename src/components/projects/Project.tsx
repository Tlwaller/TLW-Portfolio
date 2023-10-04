import React from "react";
import { ProjectInfo } from "./ProjectList";

interface ProjectProps {
  ref?: React.MutableRefObject<HTMLDivElement | null>;
  activeItem: number;
  item: ProjectInfo;
}
const Project: React.FC<ProjectProps> = ({ ref, activeItem, item }) => {
  return (
    <section
      className={`bg-secondary duration-700 ${
        activeItem === item.id ? "max-h-screen py-6" : "max-h-0"
      } transition-max-height w-screen flex flex-col items-center text-accent`}
    >
      <div className="max-w-screen-lg w-screen">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col flex-grow">
            <div className="flex items-start w-2/3 mb-6">
              <h2 className="text-xl font-bold text-black mr-14">Year</h2>
              {item.year}
            </div>
            {item.team && (
              <div className="flex items-start w-2/3 mb-6">
                <h2 className="text-xl font-bold text-black mr-12">Team</h2>
                {item.team}
              </div>
            )}
            <div className="flex items-start w-2/3 mb-6">
              <h2 className="text-xl font-bold text-black mr-12">Stack</h2>
              {item.stack}
            </div>
          </div>
          <p className="text-xl w-7/12">{item.content}</p>
        </div>
        <img
          src={item.images.length ? item.images[0].image : ""}
          alt={item.images.length ? item.images[0].alt : ""}
          className={`transition-opacity duration-300 w-full ${
            activeItem === item.id ? "py-3 opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div ref={ref} />
    </section>
  );
};

export default Project;
