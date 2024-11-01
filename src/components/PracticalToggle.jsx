import PracticalForm from "./PracticalForm";
import PropTypes from "prop-types";
import { useState } from "react";

const PracticalToggle = ({ title = "Practical Experience", id, onDelete }) => {
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
          <PracticalForm />
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

PracticalToggle.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
};

export default PracticalToggle;