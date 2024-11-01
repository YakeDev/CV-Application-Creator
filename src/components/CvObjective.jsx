import PropTypes from "prop-types";

const CvObjective = ({ objectiveText = "" }) => {
  return (
    <div className="font-normal text-sm text-slate-600 ps-3 mb-3">
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
