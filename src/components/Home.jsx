import React from "react";
import LandingPage from "./LandingPage";
import FitnessCenters from "./FitnessCenters";

function Home() {
  return (
    <main className="flex-grow">
      <LandingPage />
      <FitnessCenters />
    </main>
  );
}

export default Home;
