import PropTypes from "prop-types";

const CvGeneralInfo = ({
  name = "Yake Developer",
  profession = "Front-end Developer",
  email = "erickay.dev@gmail.com",
  phone = "+243 810 000 000",
}) => {
  return (
    <div className="grid grid-cols-12 items-center">
      <div className="col-span-8">
        <h1 className="text-2xl uppercase font-serif">{name}</h1>
        <p className="text-slate-400 uppercase font-normal text-sm">
          {profession}
        </p>
      </div>
      <div className="ek-contact-info col-span-4">
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
