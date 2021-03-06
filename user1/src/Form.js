import React from "react";
import "./App.css";

const Form = ({ values, change, submit, errors, disabled }) => {
  ///handlers///
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    change(name, type === "checkbox" ? checked : value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name: <strong>{errors.name}</strong>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={onChange}
        />
      </label>

      <label>
        Email: <strong>{errors.email}</strong>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
      </label>

      <label>
        Password: {errors.password}
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={onChange}
        />
      </label>

      <label>
        Confirm Password: {errors.password2}
        <input
          type="text"
          name="password2"
          value={values.password2}
          onChange={onChange}
        />
      </label>

      <label>
        Membership Tier:
        <select>
          <option name="role" value="">
            --- Select a Tier ---
          </option>
          <option name="role" value="member">
            Member $20
          </option>
          <option name="role" value="sponsor">
            Sponsor $5/mo.
          </option>
          <option name="role" value="fan">
            Fan $10/mo.
          </option>
          <option name="role" value="superfan">
            Super Fan $20/mo.
          </option>
          <option name="role" value="patron">
            Patron $500
          </option>
        </select>
      </label>

      <label>
        Age:
        <div className="age-selection">
          <input type="radio" name="age" id="minor" value="minor" />
          <label htmlFor="minor">Under 18</label>
        </div>
        <div className="age-selection">
          <input type="radio" name="age" id="adult" value="adult" />
          <label htmlFor="adult">18-64</label>
        </div>
        <div className="age-selection">
          <input type="radio" name="age" id="senior" value="senior" />
          <label htmlFor="senior">65 or older</label>
        </div>
      </label>

      <label>
        I Agree to the Terms of Service. {errors.tos}
        <input
          type="checkbox"
          name="tos"
          checked={values.tos}
          onChange={onChange}
        />
      </label>

      <button disabled={disabled}>Submit</button>
    </form>
  );
};

export default Form;
