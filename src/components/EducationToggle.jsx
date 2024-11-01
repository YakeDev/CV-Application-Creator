import EducationForm from "./EducationForm";
import PropTypes from "prop-types";
import { useState } from "react";

const EducationToggle = ({
  title = "Education Toggle",
  id,
  onDelete,
  onChange,
  educationInfo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    const updatedValue = name === "dateOfStudy" ? new Date(value) : value;

    const updatedEducationInfo = {
      ...educationInfo,
      [name]: updatedValue,
    };

    onChange(id, updatedEducationInfo); // Faire remonter les informations à App
  };

  return (
    <div>
      <div className="toggle-header">
        <p>{title}</p>
        <button onClick={handleToggle}>{isOpen ? "x" : "-"}</button>
      </div>
      {isOpen && (
        <div className="ek-toggle">
          <EducationForm
            educationInfo={educationInfo}
            onChange={handleEducationChange}
          />
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

EducationToggle.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  educationInfo: PropTypes.shape({
    schoolName: PropTypes.string,
    studyTitle: PropTypes.string,
    dateOfStudy: PropTypes.instanceOf(Date),
  }).isRequired,
};

export default EducationToggle;
