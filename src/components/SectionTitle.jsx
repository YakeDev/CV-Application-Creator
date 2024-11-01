import PropTypes from "prop-types";

const SectionTitle = ({ title = "Section Title" }) => {
  return (
    <div className="mb-3 bg-slate-100  ps-3 p-1.5">
      <p className="text-base font-bold text-slate-500 uppercase">{title}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
