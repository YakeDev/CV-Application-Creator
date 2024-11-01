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
    <div className="education-experience font-normal text-normal text-slate-500 ps-3 mb-3">
      <h3 className="font-medium text-slate-600 uppercase text-sm">
        {titleStudy}
      </h3>
      <p className="text-sm">
        <span className="">{schoolName} | </span>
        <span>{formattedDate}</span>
      </p>
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
