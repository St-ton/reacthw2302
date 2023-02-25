import React from "react";
import { connect } from "react-redux";
import "./Users.css";

const MaleUsers = ({ maleUsers }) => {
  const defaultLink = "./male.jpg";
  return (
    <div className="users-container">
      <h3 className="title">Male Users</h3>
      {/* <div className="users-list"> */}
      {maleUsers.map((user) => (
        <div className="users-card" key={user.name}>
          <img
            src={user.avatarLink === "" ? defaultLink : user.avatarLink}
            alt={user.name}
          />
          <h4>{user.name}</h4>
          <p className="gender">Male</p>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    maleUsers: state.maleUsers,
  };
};

export default connect(mapStateToProps)(MaleUsers);
