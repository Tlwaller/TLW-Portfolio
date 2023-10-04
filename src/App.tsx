// src/App.tsx
import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProjectList from "./components/projects/ProjectList";

const App: React.FC = () => {
  return (
    <div className="page-container relative min-h-screen overflow-x-hidden pb-96">
      <div className="mx-auto my-auto w-full flex flex-col items-center">
        <Hero />
        <ProjectList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
