import PropTypes from "prop-types";

const GeneralInfoSection = ({ generalInfo, onChange }) => {
  return (
    <div className="ek-form-containt">
      <div className="input-container mb-4">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Votre nom"
          value={generalInfo.name}
          onChange={onChange}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="input-container mb-4">
        <label
          htmlFor="profession"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Profession
        </label>
        <input
          type="text"
          name="profession"
          id="profession"
          placeholder="Votre profession"
          value={generalInfo.profession}
          onChange={onChange}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="input-container mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Votre e-mail"
          value={generalInfo.email}
          onChange={onChange}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="input-container mb-4">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Téléphone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Votre numéro de téléphone"
          value={generalInfo.phone}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
