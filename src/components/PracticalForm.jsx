const PracticalForm = () => {
  return (
    <div>
      <form>
        <div className="input-container">
          <label>
            Title :
            <input type="text" name="title" required placeholder="Title" />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="company">
            Company:
            <input
              type="text"
              name="company"
              id="company"
              required
              placeholder="Company"
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="location">
            Location :
            <input
              type="text"
              name="company"
              id="location"
              required
              placeholder="Location"
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="start-date">
            Start date:
            <input type="date" name="startDate" id="start-date" required />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="end-date">
            End date:
            <input type="date" name="endDate" id="end-date" required />
          </label>
        </div>
      </form>
    </div>
  );
};

export default PracticalForm;
