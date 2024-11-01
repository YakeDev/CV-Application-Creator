// Composant App
import GeneralInfoSection from "./components/GeneralInfoSection";
import SectionTitle from "./components/SectionTitle";
import EducationToggle from "./components/EducationToggle";
import PracticalToggle from "./components/PracticalToggle";
import CvPreview from "./components/CvPreview";
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
    name: "Your Name",
    profession: "Profession",
    email: "Your Email",
    phone: "+243 812 345 678",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="ek-sidebar">
        <div className="ek-section">
          <SectionTitle title="Informations Générales" />
          <form action="">
            {/* Passer handleInputChange et generalInfo */}
            <GeneralInfoSection
              generalInfo={generalInfo}
              onChange={handleInputChange}
            />
          </form>
        </div>

        <div className="ek-section">
          <SectionTitle title="Expérience Éducative" />
          <div className="ek-education-toggle-container">
            {educationToggles.map((toggle) => (
              <EducationToggle
                key={toggle.id}
                id={toggle.id}
                onDelete={deleteEducationToggle}
                title="Expérience Éducative"
              />
            ))}
          </div>
          <button type="button" onClick={addEducationToggle}>
            Ajouter une autre
          </button>
        </div>

        <div className="ek-section">
          <SectionTitle title="Expérience Pratique" />
          <div className="ek-practical-toggle-container">
            {practicalToggles.map((toggle) => (
              <PracticalToggle
                key={toggle.id}
                id={toggle.id}
                onDelete={deletePracticalToggle}
                title="Expérience Pratique"
              />
            ))}
          </div>
          <button type="button" onClick={addPracticalToggle}>
            Ajouter une autre
          </button>
        </div>
      </div>
      <div className="ek-main">
        <div className="ek-cv-preview">
          <CvPreview generalInfo={generalInfo} />
        </div>
      </div>
    </>
  );
};

export default App;
