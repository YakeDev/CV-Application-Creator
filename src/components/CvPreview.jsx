import PropTypes from "prop-types"; // Importer PropTypes
import CvEducationExp from "./CvEducationExp";
import CvGeneralInfo from "./CvGeneralInfo";
import CvPracticalExp from "./CvPracticalExp";
import SectionTitle from "./SectionTitle";
import CvObjective from "./CvObjective";

const CvPreview = ({ generalInfo, objectiveText, educationInfos = [] }) => {
  return (
    <div>
      <div className="ek-cv-section ek-cv-general-info">
        <CvGeneralInfo
          name={generalInfo?.name || "Your name"}
          profession={generalInfo?.profession || "Function"}
          email={generalInfo?.email || "Your Email"}
          phone={generalInfo?.phone || "Your Phone number"}
        />
      </div>
      <div className="ek-cv-section">
        <SectionTitle title="Objective" />
        <CvObjective objectiveText={objectiveText?.objective || ""} />
      </div>

      <div className="ek-cv-section">
        <SectionTitle title="Education" />
        {educationInfos && educationInfos.length > 0 ? (
          educationInfos.map((educationInfo, index) => (
            <CvEducationExp
              key={index}
              titleStudy={educationInfo?.studyTitle || "Study Titl"}
              schoolName={educationInfo?.schoolName || "School Name"}
              dateOfStudy={educationInfo?.dateOfStudy || new Date()}
            />
          ))
        ) : (
          <p>No education experience provided.</p>
        )}
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

  educationInfos: PropTypes.arrayOf(
    // Remplacer `educationInfo` par `educationInfos`
    PropTypes.shape({
      schoolName: PropTypes.string,
      studyTitle: PropTypes.string,
      dateOfStudy: PropTypes.instanceOf(Date), // Gardez comme instance de Date
    })
  ),
};

export default CvPreview;
