import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../store/slices/auth-slice";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/util/Loader";
import Message from "../components/util/Message";
import FormContainer from "../components/util/FormContainer";
import SEO from "../components/seo";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { useRegisterMutation } from "../store/api/auth";

const Register = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerUser, { isLoading, error, isError }] = useRegisterMutation();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password1: "",
    password2: "",
  });
  const { email, first_name, last_name, password1, password2 } = formData;

  const user = useSelector((state) => state.auth.userInfo);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const handlingInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlingSubmit = async (e) => {
    e.preventDefault();
    try {
      const registeredUser = await registerUser(formData).unwrap();
      setMessage("Check your email for a confirmation link!");
      console.log("User Registered Successfully!!", registeredUser); // Debug log
    } catch (err) {
      console.error("Failed to register:", err);
      setMessage("Registration failed. Please try again.");
    }
    setStatus(true);
    setTimeout(() => {
      setShouldNavigate(true);
    }, 2000);
  };

  if (status) {
    return (
      <div>
        {message && <Message variant="info">{message}</Message>}
        {shouldNavigate && navigate("/login")}
      </div>
    );
  }

  return (
    <Fragment>
      <SEO
        titleTemplate="Register"
        description="Register page of The Cage SShop Online | Vape and Smoke Accessories."
      />
      <LayoutTwo headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Register", path: process.env.PUBLIC_URL + pathname },
          ]}
          backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />
        <Container className="py-4 login-form-container">
          {message && (
            <Message
              variant={
                message.includes("Check your email") ? "success" : "danger"
              }
            >
              {message}
            </Message>
          )}
          {isError && (
            <Message variant="danger">
              {error?.data?.detail || error.error}
            </Message>
          )}
          {isLoading ? (
            <div className="main-box d-flex justify-content-center align-items-center">
              <Loader />
            </div>
          ) : (
            <div className="main-box">
              <h2 className="text-center mb-4">Register</h2>
              <form className="mb-3" onSubmit={(e) => handlingSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    name="first_name"
                    value={first_name}
                    onChange={(e) => handlingInput(e)}
                    type="text"
                    className="form-control"
                    id="first_name"
                    placeholder="First name ..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <input
                    name="last_name"
                    value={last_name}
                    onChange={(e) => handlingInput(e)}
                    type="text"
                    className="form-control"
                    id="last_name"
                    placeholder="Last name ..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => handlingInput(e)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password1" className="form-label">
                    Password
                  </label>
                  <input
                    name="password1"
                    value={password1}
                    onChange={(e) => handlingInput(e)}
                    type="password"
                    className="form-control"
                    id="password1"
                    placeholder="Password ..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password2" className="form-label">
                    Password
                  </label>
                  <input
                    name="password2"
                    value={password2}
                    onChange={(e) => handlingInput(e)}
                    type="password"
                    className="form-control"
                    id="password2"
                    placeholder="Password ..."
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn login-button" type="submit">
                    Register
                  </button>
                </div>
              </form>
              <p className="text-light">
                Already have an account? <Link className="login-link" to={"../login/"}>Login</Link>
              </p>
            </div>
          )}
        </Container>
      </LayoutTwo>
    </Fragment>
  );
};

export default Register;
