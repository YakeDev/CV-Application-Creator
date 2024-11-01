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
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            id="company"
            required
            placeholder="Company"
          />
        </div>
        <div className="input-container">
          <label htmlFor="location">Location :</label>
          <input
            type="text"
            name="company"
            id="location"
            required
            placeholder="Location"
          />
        </div>
        <div className="input-container">
          <label htmlFor="start-date">
            Start date:
            <input type="date" name="startDate" id="start-date" />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="end-date">End date:</label>
          <input type="date" name="endDate" id="end-date" />
        </div>
      </form>
    </div>
  );
};

export default PracticalForm;
