import PropTypes from "prop-types"; // Importer PropTypes
import CvEducationExp from "./CvEducationExp";
import CvGeneralInfo from "./CvGeneralInfo";
import CvPracticalExp from "./CvPracticalExp";
import SectionTitle from "./SectionTitle";
import ObjectifSection from "./ObjectifSection";

const CvPreview = ({ generalInfo }) => {
  return (
    <div>
      <div className="ek-cv-general-info">
        <CvGeneralInfo
          name={generalInfo.name}
          profession={generalInfo.profession}
          email={generalInfo.email}
          phone={generalInfo.phone}
        />
      </div>
      <div className="ek-cv-education">
        <SectionTitle title="Education" />
        <CvEducationExp />
      </div>
      <div className="ek-practical">
        <SectionTitle title="Practical Experience" />
        <CvPracticalExp />
      </div>
      <div className="ek-objectif">
        <SectionTitle title="Objective" />
        <ObjectifSection />
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
};

export default CvPreview;
