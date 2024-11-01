import PropTypes from "prop-types";

const CvObjective = ({ objectiveText = "" }) => {
  return (
    <div>
      {objectiveText ? (
        <p>{objectiveText}</p>
      ) : (
        <p>Aucun objectif défini.</p> // Message par défaut si aucun objectif n'est fourni
      )}
    </div>
  );
};

CvObjective.propTypes = {
  objectiveText: PropTypes.string,
};

export default CvObjective;
