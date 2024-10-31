import PracticalForm from "./PracticalForm";

const PracticalToggle = () => {
  return (
    <div>
      <div className="toggle-header">
        <p>Practical Toggle 1</p>
        <button>X</button>
      </div>
      <PracticalForm />
      <button type="button">Delete</button>
    </div>
  );
};

export default PracticalToggle;
