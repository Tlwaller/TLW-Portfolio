// src/App.tsx
import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="page-container relative min-h-screen px-8 overflow-x-hidden">
      <div className="max-w-screen-lg mx-auto my-auto pb-64">
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default App;
