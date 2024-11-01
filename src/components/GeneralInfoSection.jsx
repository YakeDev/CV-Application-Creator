import PropTypes from "prop-types";

const GeneralInfoSection = ({ generalInfo, onChange }) => {
  return (
    <div className="ek-form-containt">
      <div className="input-container">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Votre nom"
          value={generalInfo.name}
          onChange={onChange}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          name="profession"
          id="profession"
          placeholder="Votre profession"
          value={generalInfo.profession}
          onChange={onChange}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Votre e-mail"
          value={generalInfo.email}
          onChange={onChange}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Téléphone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Votre numéro de téléphone"
          value={generalInfo.phone}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

// Définition des types de props
GeneralInfoSection.propTypes = {
  generalInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GeneralInfoSection;
