import PropTypes from "prop-types";

const ObjectiveSection = ({ objectiveText, onChange }) => {
  return (
    <div>
      <form>
        <div className="input-container">
          <label htmlFor="objective">Objectif:</label>
          <textarea
            name="objective"
            id="objective"
            rows="6"
            placeholder="Your objective"
            value={objectiveText.objective}
            onChange={onChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

// Définition des types de props
ObjectiveSection.propTypes = {
  objectiveText: PropTypes.shape({
    objective: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func,
};

export default ObjectiveSection;
