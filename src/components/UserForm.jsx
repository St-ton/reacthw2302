import React, { useState } from "react";
import { connect } from "react-redux";
import "./UserForm.css";

const UserForm = ({ addMaleUser, addFemaleUser }) => {
  const [name, setName] = useState("");
  const [avatarLink, setAvatarLink] = useState("");
  const [gender, setGender] = useState("male");
  // const defaultLink = "localhost:3005/avatar.jpg";

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatarLink(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (gender === "male") {
      addMaleUser({ name, avatarLink });
    } else {
      addFemaleUser({ name, avatarLink });
    }
    setName("");
    setAvatarLink("");
    setGender("male");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Name:</label> */}
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Name ..."
        />

        {/* <label htmlFor="avatar">Avatar Link:</label> */}
        <input
          type="text"
          id="avatar"
          value={avatarLink}
          onChange={handleAvatarChange}
          placeholder="Avatar Link..."
        />

        {/* <label htmlFor="gender">Gender:</label> */}
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value selected>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit">Add USER</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMaleUser: (user) => dispatch({ type: "ADD_MALE_USER", payload: user }),
    addFemaleUser: (user) =>
      dispatch({ type: "ADD_FEMALE_USER", payload: user }),
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
