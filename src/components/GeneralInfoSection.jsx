import React from "react";

class GeneralInfoSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ek-form-containt">
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" placeholder="Your phone" />
        </div>
        <div className="input-container">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            placeholder="Your linkedIn link"
          />
        </div>
      </div>
    );
  }
}

export default GeneralInfoSection;
