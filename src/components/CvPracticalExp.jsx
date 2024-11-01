import PropTypes from "prop-types";

const CvPracticalExp = ({
  title = "Title",
  company = "Company name",
  location = "Company location",
  startDate = new Date("2024-09-01"),
  endDate = new Date("2024-10-01"),
}) => {
  // Formatage des dates pour n'afficher que le mois et l'année
  const formattedStartDate = startDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const formattedEndDate = endDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <p>{title}</p>
      <p>
        <span>{company}, </span>
        <span>{location}, </span>
        <span>
          {formattedStartDate} - {formattedEndDate}
        </span>
      </p>
    </div>
  );
};

// Utilisation de PropTypes pour valider les props
CvPracticalExp.propTypes = {
  title: PropTypes.string, // Valeur par défaut, donc pas de isRequired
  company: PropTypes.string, // Valeur par défaut, donc pas de isRequired
  location: PropTypes.string, // Valeur par défaut, donc pas de isRequired
  startDate: PropTypes.instanceOf(Date), // Validation pour s'assurer que c'est une date
  endDate: PropTypes.instanceOf(Date), // Validation pour s'assurer que c'est une date
};

export default CvPracticalExp;
