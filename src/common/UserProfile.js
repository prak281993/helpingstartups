import { Auth } from "aws-amplify";
import React from "react";
import { Link, useHistory } from "react-router-dom";

function UserProfile() {
  const awsSrc = process.env.REACT_APP_AWS_URL;
  const history = useHistory();
  const handleLogOut = () => {
    Auth.signOut();
    history.push("/");
  };
  return (
    <div className="dropdown">
      <span
        className="nav-link dropdown-toggle"
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          src={`${awsSrc}/icon-images/user-profile.png`}
          width="30"
          height="30"
          className="rounded-circle"
        />
      </span>
      <div
        style={{ fontSize: "1.6rem" }}
        className="dropdown-menu"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <span className="customnavbar__link" className="dropdown-item">
          My Profile
        </span>
        <span
          onClick={handleLogOut}
          className="customnavbar__link"
          className="dropdown-item"
        >
          Log Out
        </span>
      </div>
    </div>
  );
}

export default UserProfile;
