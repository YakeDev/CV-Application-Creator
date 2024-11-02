import PropTypes from "prop-types";

const SectionTitle = ({ title = "Section Title", icon: Icon }) => {
  return (
    <div className="mb-3 bg-slate-100 ps-3 p-1.5">
      <p className="flex items-center text-base font-bold text-slate-500 uppercase">
        <span className="me-2 text-lg">{Icon && <Icon />}</span>{" "}
        <span>{title}</span>
      </p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export default SectionTitle;
