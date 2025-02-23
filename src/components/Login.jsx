import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/");

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password)
      return toast.error("Fields cannot be empty");

    const response = await dispatch(login(formData));

    response?.payload?.success
      ? (toast.success("Login successful!"), navigate("/"))
      : "";
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login to start creating tasks</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          {["email", "password"].map((field) => (
            <div className="form-group" key={field}>
              <input
                type={field}
                className="form-control"
                id={field}
                name={field}
                value={formData[field]}
                placeholder={`Enter your ${field}`}
                onChange={onChange}
                required
              />
            </div>
          ))}

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-block"
              style={{ width: 100 }}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
