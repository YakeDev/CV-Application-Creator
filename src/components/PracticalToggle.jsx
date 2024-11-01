import PracticalForm from "./PracticalForm";
import PropTypes from "prop-types";
import { useState } from "react";

const PracticalToggle = ({
  title = "Practical Experience",
  id,
  onDelete,
  onChange,
  practicalInfo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePracticalChange = (event) => {
    const { name, value } = event.target;
    const updatedValue =
      name === "startDate" || name === "endDate" ? new Date(value) : value;

    // Check for valid dates
    if ((name === "startDate" || name === "endDate") && isNaN(updatedValue)) {
      console.error("Invalid date");
      return; // Optionally reset to previous valid date
    }

    const updatedPracticalInfo = {
      ...practicalInfo,
      [name]: updatedValue,
    };

    onChange(id, updatedPracticalInfo);
  };

  return (
    <div>
      <div className="toggle-header">
        <p>{title}</p>
        <button onClick={handleToggle}>{isOpen ? "x" : "-"}</button>
      </div>

      {isOpen && (
        <div className="ek-toggle">
          <PracticalForm
            practicalInfo={practicalInfo}
            onChange={handlePracticalChange}
          />
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

PracticalToggle.propTypes = {
  title: PropTypes.string, // Optional
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  practicalInfo: PropTypes.shape({
    practicalTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }).isRequired, // Ensure practicalInfo is always provided
};

export default PracticalToggle;
