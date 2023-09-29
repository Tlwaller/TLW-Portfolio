import React from "react";

const ProjectList: React.FC = () => {
  return (
    <ul className="flex flex-col justify-evenly h-96 w-full">
      <li className="text-6xl font-bold text-primary hover:text-secondary transition-all cursor-pointer">
        Snap! Insights
      </li>
      <li className="text-6xl font-bold text-primary hover:text-secondary transition-all cursor-pointer">
        Spot-Fiend
      </li>
      <li className="text-6xl font-bold text-primary hover:text-secondary transition-all cursor-pointer">
        Concert-Quest
      </li>
    </ul>
  );
};

export default ProjectList;
