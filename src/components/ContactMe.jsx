import React from "react";

const ContactMe = () => {
  return (
    <div className="bg-darkPrimary flex flex-col gap-10 items-center justify-center py-10">
      <p className="text-3xl hire font-bold tracking-wide text-center leading-relaxed">
        <mark>Contact Me</mark>
      </p>
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label for="name">Name</label>
            <input required="" name="name" id="name" type="text"></input>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input required="" name="email" id="email" type="email"></input>
          </div>
          <div className="form-group">
            <label for="textarea">How Can We Help You?</label>
            <textarea
              required=""
              cols="50"
              rows="10"
              id="textarea"
              name="textarea">
              {" "}
            </textarea>
          </div>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
