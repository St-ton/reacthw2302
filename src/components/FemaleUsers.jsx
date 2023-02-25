import React from "react";
import { connect } from "react-redux";
import "./Users.css";

const FemaleUsers = ({ femaleUsers }) => {
  const defaultLink = "./avatar.jpg";
  return (
    <div className="users-container">
      <h3 className="title">Female Users</h3>
      {/* <div className="users-list"> */}
      {femaleUsers.map((user) => (
        <div className="users-card" key={user.name}>
          <img
            src={user.avatarLink === "" ? defaultLink : user.avatarLink}
            alt={user.name}
          />
          <h4>{user.name}</h4>
          <h6>Female</h6>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    femaleUsers: state.femaleUsers,
  };
};

export default connect(mapStateToProps)(FemaleUsers);
