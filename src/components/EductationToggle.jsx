import EducationForm from "./EducationForm";

const EductationToggle = () => {
  return (
    <div>
      <div className="toggle-header">
        <p>Education Toggle 1</p>
        <button>X</button>
      </div>
      <EducationForm />
      <button type="button">Delete</button>
    </div>
  );
};

export default EductationToggle;
