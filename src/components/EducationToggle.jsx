import EducationForm from "./EducationForm";
import PropTypes from "prop-types";
import { useState } from "react";

const EducationToggle = ({ title = "Education Toggle", id, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); // Inverser l'état d'ouverture
  };

  return (
    <div>
      <div className="toggle-header">
        <p>{title}</p>
        <button onClick={handleToggle}>{isOpen ? "x" : "-"}</button>
      </div>
      {isOpen && (
        <div className="ek-toggle">
          <EducationForm />
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
};

export default EducationToggle;
