import PropTypes from "prop-types";

const PracticalForm = ({ practicalInfo, onChange }) => {
  return (
    <div>
      <form>
        <div className="input-container">
          <label htmlFor="practicle-title">
            Title:
            <input
              type="text"
              id="practicle-title"
              name="practicalTitle"
              required
              placeholder="Title"
              value={practicalInfo.practicalTitle || ""} // Ajout de la liaison
              onChange={onChange} // Appel du gestionnaire
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            id="company"
            required
            placeholder="Company"
            value={practicalInfo.company || ""} // Gestion des valeurs vides
            onChange={onChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            required
            placeholder="Location"
            value={practicalInfo.location || ""} // Gestion des valeurs vides
            onChange={onChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="start-date">
            Start date:
            <input
              type="date"
              name="startDate"
              id="start-date"
              value={
                practicalInfo.startDate
                  ? practicalInfo.startDate.toISOString().split("T")[0]
                  : ""
              } // Formater la date
              onChange={onChange}
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="end-date">End date:</label>
          <input
            type="date"
            name="endDate"
            id="end-date"
            value={
              practicalInfo.endDate
                ? practicalInfo.endDate.toISOString().split("T")[0]
                : ""
            } // Formater la date
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

// Define PropTypes for the component
PracticalForm.propTypes = {
  practicalInfo: PropTypes.shape({
    practicalTitle: PropTypes.string,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }),
  onChange: PropTypes.func.isRequired,
};

export default PracticalForm;
