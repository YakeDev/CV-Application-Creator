import PropTypes from "prop-types";

const SectionTitle = ({ title = "Section Title" }) => {
  return <h2>{title}</h2>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
