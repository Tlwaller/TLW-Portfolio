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
        activeItem === item.id ? "max-h-screen p-6" : "max-h-0"
      } transition-max-height w-screen flex flex-col items-center text-accent`}
    >
      <div className="max-w-screen-lg w-screen px-6">
        <div className="flex flex-col md:flex-row justify-between items-start pb-6">
          <div className="flex flex-col flex-grow">
            <div className="flex items-start w-full md:w-2/3 justify-between mb-6">
              <h2 className="text-xl font-bold text-black mr-14">Year</h2>
              <span className="w-1/3">{item.year}</span>
            </div>
            {item.team && (
              <div className="flex items-start w-full md:w-2/3 justify-between mb-6">
                <h2 className="text-xl font-bold text-black mr-12">Team</h2>
                <span className="w-1/3">{item.team}</span>
              </div>
            )}
            <div className="flex items-start w-full md:w-2/3 justify-between">
              <h2 className="text-xl font-bold text-black mr-12">Stack</h2>
              <span className="w-1/3">{item.stack}</span>
            </div>
          </div>
          <p className="text-xl my-6 md:w-7/12">{item.content}</p>
        </div>
        <img
          src={item.images.length ? item.images[0].image : ""}
          alt={item.images.length ? item.images[0].alt : ""}
          className={`transition-opacity duration-300 w-full ${
            activeItem === item.id ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div ref={ref} />
    </section>
  );
};

export default Project;
