const EducationForm = () => {
  return (
    <div>
      <form>
        <div className="input-container">
          <label htmlFor="school-name">
            School Name:
            <input
              id="school-name"
              type="text"
              name="schoolName"
              required
              placeholder="School name"
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="study-title">
            Title of Study:
            <input
              id="study-title"
              type="text"
              name="studyTitle"
              required
              placeholder="Title of study"
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="date-of-study">
            Date of study:
            <input type="date" id="date-of-study" name="dateOfStudy" required />
          </label>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
