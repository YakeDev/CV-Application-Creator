import PropTypes from "prop-types";

const CvGeneralInfo = ({
  name = "Yake Developer",
  profession = "Front-end Developer",
  email = "erickay.dev@gmail.com",
  phone = "+243 810 000 000",
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{profession}</p>
      <div className="ek-contact-info">
        <p className="ek-contact-info-item">{email}</p>
        <p className="ek-contact-info-item">{phone}</p>
      </div>
    </div>
  );
};

CvGeneralInfo.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

export default CvGeneralInfo;
