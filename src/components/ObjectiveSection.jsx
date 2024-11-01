import PropTypes from "prop-types";

const ObjectiveSection = ({ objectiveText, onChange }) => {
  return (
    <div>
      <form className="mx-auto">
        <div className="input-container">
          <label
            htmlFor="objective"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Objectif:
          </label>
          <textarea
            name="objective"
            id="objective"
            rows="4"
            placeholder="Your objective"
            value={objectiveText.objective}
            onChange={onChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
