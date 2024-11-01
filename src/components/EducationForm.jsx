const EducationForm = () => {
  return (
    <div>
      <form>
        <div className="input-container">
          <label htmlFor="school-name">School Name:</label>
          <input
            id="school-name"
            type="text"
            name="schoolName"
            required
            placeholder="School name"
          />
        </div>
        <div className="input-container">
          <label htmlFor="study-title">Title of Study:</label>
          <input
            id="study-title"
            type="text"
            name="studyTitle"
            required
            placeholder="Title of study"
          />
        </div>
        <div className="input-container">
          <label htmlFor="date-of-study">Date of study:</label>
          <input type="date" id="date-of-study" name="dateOfStudy" />
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
