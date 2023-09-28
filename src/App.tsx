// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="max-w-screen-md mx-auto my-auto">
        <Hero />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
