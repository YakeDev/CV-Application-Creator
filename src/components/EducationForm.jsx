import PropTypes from "prop-types"; // Import PropTypes

const EducationForm = ({ educationInfo, onChange }) => {
  return (
    <div>
      <form>
        <div className="input-container">
          <label htmlFor="study-title">Title of Study:</label>
          <input
            id="study-title"
            type="text"
            name="studyTitle"
            required
            placeholder="Title of study"
            value={educationInfo.studyTitle}
            onChange={onChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="school-name">School Name:</label>
          <input
            id="school-name"
            type="text"
            name="schoolName"
            required
            placeholder="School name"
            value={educationInfo.schoolName}
            onChange={onChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="date-of-study">Date of Study:</label>
          <input
            type="date"
            id="date-of-study"
            name="dateOfStudy"
            value={
              educationInfo.dateOfStudy
                ? educationInfo.dateOfStudy.toISOString().split("T")[0]
                : ""
            } // Format Date for input
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

// Define PropTypes for the component
EducationForm.propTypes = {
  educationInfo: PropTypes.shape({
    studyTitle: PropTypes.string.isRequired,
    schoolName: PropTypes.string.isRequired,
    dateOfStudy: PropTypes.instanceOf(Date), // Expect a Date object
  }).isRequired, // This prop is required
  onChange: PropTypes.func.isRequired, // Expect a function for onChange
};

export default EducationForm;
