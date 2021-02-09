import React from "react";
import useForm from "./useForm";
import validateInfo from "./Validate";
import "./Contact.styles.css";

const Contact = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validateInfo
  );
  return (
    <div className="contact-section">
      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Let`s get in touch! I`ll get back to you in no time!</h1>
          <div className="form-inputs">
            <label htmlFor="name" className="form-label">
              Name{" "}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-input"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs message">
            <label htmlFor="text" className="form-label">
              Message{" "}
            </label>
            <input
              id="text"
              type="text"
              name="message"
              className="form-input"
              placeholder="Write a message"
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && <p>{errors.message}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
