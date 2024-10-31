import React from "react";
import GeneralInfoSection from "./components/GeneralInfoSection";
import SectionTitle from "./components/SectionTitle";
import EductationToggle from "./components/EductationToggle";
import PracticalToggle from "./components/PracticalToggle";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="ek-section">
          <SectionTitle title="General Informations" />

          <form action="">
            <GeneralInfoSection />
          </form>
        </div>
        <div className="ek-section">
          <SectionTitle title="Education Experience" />
          <div className="ek-education-toggle-container">
            <EductationToggle />
          </div>
          <button type="button">Add another</button>
        </div>
        <div className="ek-section">
          <SectionTitle title="Practical Experience" />
          <div className="ek-practical-toggle-container">
            <PracticalToggle />
          </div>
          <button type="button">Add another</button>
        </div>
      </>
    );
  }
}

export default App;
