// src/components/Header.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="max-w-screen-lg w-screen px-4">
      <h1 className="text-6xl font-bold text-primary mt-12 mb-6">Welcome.</h1>
      <p className="text-secondary text-2xl leading-9">
        Hey, I'm Trey—an enthusiast of all things tech. From crafting my initial
        website at DevMountain to spearheading groundbreaking projects like
        "Insights" at Snap! Mobile, my journey evolved from an aspiring coder to
        a seasoned software engineer. I stand ready to conquer new horizons and
        embrace every engineering adventure that comes my way. Please stay a
        while and take a look at some of the projects I've worked on!
      </p>
    </header>
  );
};

export default Hero;
