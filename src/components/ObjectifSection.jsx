const ObjectifSection = () => {
  return (
    <div>
      <form>
        <div className="input-container">
          <label htmlFor="objectif">Objectif:</label>
          <textarea
            name="objectif"
            id="objectif"
            rows="10"
            placeholder="Your objectif"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ObjectifSection;
