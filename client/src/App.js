import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { EnjoyYourTrip } from "./components/sections/EnjoyYourTrip";
import { ShareYourLocation } from "./components/sections/ShareYourLocation";
import { StayConnected } from "./components/sections/StayConnected";
import { TrackYourTrips } from "./components/sections/TrackYourTrips";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <StayConnected />
      <div className="divider-gradient" />
      <ShareYourLocation />
      <TrackYourTrips />
      <EnjoyYourTrip />
    </div>
  );
}

export default App;
