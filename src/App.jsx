// App Component
import GeneralInfoSection from "./components/GeneralInfoSection";
import SectionTitle from "./components/SectionTitle";
import EducationToggle from "./components/EducationToggle";
import PracticalToggle from "./components/PracticalToggle";
import CvPreview from "./components/CvPreview";
import ObjectiveSection from "./components/ObjectiveSection"; // Changed the name to English
import { useState } from "react";

const App = () => {
  const [practicalToggles, setPracticalToggles] = useState([{ id: 1 }]);
  const [educationToggles, setEducationToggles] = useState([{ id: 1 }]);

  const addPracticalToggle = () => {
    setPracticalToggles([
      ...practicalToggles,
      { id: practicalToggles.length + 1 + Date.now() },
    ]);
  };

  const deletePracticalToggle = (id) => {
    setPracticalToggles(practicalToggles.filter((toggle) => toggle.id !== id));
  };

  const addEducationToggle = () => {
    setEducationToggles([
      ...educationToggles,
      { id: educationToggles.length + 1 + Date.now() },
    ]);
  };

  const deleteEducationToggle = (id) => {
    setEducationToggles(educationToggles.filter((toggle) => toggle.id !== id));
  };

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    profession: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const [objectiveText, setObjectiveText] = useState({ objective: "" });

  const handleObjectiveChange = (event) => {
    setObjectiveText({ objective: event.target.value });
  };

  return (
    <>
      <div className="ek-sidebar">
        <div className="ek-section">
          <SectionTitle title="General Information" />
          <form action="">
            <GeneralInfoSection
              generalInfo={generalInfo}
              onChange={handleInputChange}
            />
          </form>
        </div>

        <div className="ek-section">
          <SectionTitle title="Educational Experience" />
          <div className="ek-education-toggle-container">
            {educationToggles.map((toggle) => (
              <EducationToggle
                key={toggle.id}
                id={toggle.id}
                onDelete={deleteEducationToggle}
                title="Educational Experience"
              />
            ))}
          </div>
          <button type="button" onClick={addEducationToggle}>
            Add another
          </button>
        </div>

        <div className="ek-section">
          <SectionTitle title="Practical Experience" />
          <div className="ek-practical-toggle-container">
            {practicalToggles.map((toggle) => (
              <PracticalToggle
                key={toggle.id}
                id={toggle.id}
                onDelete={deletePracticalToggle}
                title="Practical Experience"
              />
            ))}
          </div>
          <button type="button" onClick={addPracticalToggle}>
            Add another
          </button>
        </div>

        <div className="ek-section">
          <SectionTitle title="Objective" />
          <ObjectiveSection
            objectiveText={objectiveText} // Pass the dynamic state
            onChange={handleObjectiveChange} // Pass the update function
          />
        </div>
      </div>
      <div className="ek-main">
        <div className="ek-cv-preview">
          <CvPreview generalInfo={generalInfo} objectiveText={objectiveText} />
        </div>
      </div>
    </>
  );
};

export default App;
