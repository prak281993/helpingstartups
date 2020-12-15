import { Auth } from "aws-amplify";
import React from "react";
import { Link, useHistory } from "react-router-dom";

function UserProfile() {
  const history = useHistory();
  const handleLogOut = () => {
    Auth.signOut();
    history.push("/");
  };
  return (
    <div className="dropdown">
      <Link
        className="nav-link dropdown-toggle"
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          src="/assets/icon-images/user-profile.png"
          width="30"
          height="30"
          className="rounded-circle"
        />
      </Link>
      <div style={{fontSize:'1.6rem'}} className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="customnavbar__link" className="dropdown-item">
          My Profile
        </Link>
        <Link
          onClick={handleLogOut}
          className="customnavbar__link"
          className="dropdown-item"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default UserProfile;
