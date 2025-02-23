import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const User = useSelector((state) => state.auth.user);
  // console.log(User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Onlogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");

    // console.log("click");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Task Creator</Link>
      </div>
      <ul>
        {User ? (
          <>
            {" "}
            <li>
              <Link onClick={Onlogout}>Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
