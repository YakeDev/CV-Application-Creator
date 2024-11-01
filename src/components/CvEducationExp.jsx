import PropTypes from "prop-types";

const CvEducationExp = ({
  titleStudy = "Title Study",
  schoolName = "School Nam",
  dateOfStudy = new Date("2024-10-01"), // Valeur par défaut comme une instance de Date
}) => {
  // Formatage de la date pour n'afficher que le mois et l'année
  const formattedDate = dateOfStudy.toLocaleString("default", {
    month: "long", // Affiche le mois complet
    year: "numeric", // Affiche l'année
  });

  return (
    <div className="education-experience">
      <h3>{titleStudy}</h3>
      <p>{schoolName}</p>
      <p>{formattedDate}</p> {/* Affichage du mois et de l'année */}
    </div>
  );
};

// Utilisation de PropTypes pour valider les props
CvEducationExp.propTypes = {
  titleStudy: PropTypes.string, // Valeur par défaut, donc pas de isRequired
  schoolName: PropTypes.string, // Valeur par défaut, donc pas de isRequired
  dateOfStudy: PropTypes.instanceOf(Date), // Validation pour s'assurer que c'est une date
};

export default CvEducationExp;
