import PropTypes from "prop-types";

const SectionTitle = ({ title = "Section Title" }) => {
  return <h3>{title}</h3>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
