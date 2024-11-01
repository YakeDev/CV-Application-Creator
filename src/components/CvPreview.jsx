import PropTypes from "prop-types"; // Importer PropTypes
import CvEducationExp from "./CvEducationExp";
import CvGeneralInfo from "./CvGeneralInfo";
import CvPracticalExp from "./CvPracticalExp";
import SectionTitle from "./SectionTitle";
import CvObjective from "./CvObjective";

const CvPreview = ({ generalInfo, objectiveText }) => {
  return (
    <div>
      <div className="ek-cv-section ek-cv-general-info">
        <CvGeneralInfo
          name={generalInfo.name}
          profession={generalInfo.profession}
          email={generalInfo.email}
          phone={generalInfo.phone}
        />
      </div>
      <div className="ek-cv-section">
        <SectionTitle title="Objective" />
        <CvObjective objectiveText={objectiveText?.objective || ""} />
      </div>

      <div className="ek-cv-section">
        <SectionTitle title="Education" />
        <CvEducationExp />
      </div>
      <div className="ek-cv-section">
        <SectionTitle title="Practical Experience" />
        <CvPracticalExp />
      </div>
    </div>
  );
};

// Définir les types de props
CvPreview.propTypes = {
  generalInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,

  objectiveText: PropTypes.shape({
    objective: PropTypes.string,
  }),
};

export default CvPreview;
