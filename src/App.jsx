import React from "react";

import AboutMe from "./Components/aboutme/AboutMe";
import Technology from "./Components/technology/Technology";
import Header from "./Components/header/Header";

const App = () => {
  return (
    <main>
      <Header />
      <AboutMe />
      <Technology />
    </main>
  );
};

export default App;
