import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/util/Loader";
import Message from "../components/util/Message";
import FormContainer from "../components/util/FormContainer";
import SEO from "../components/seo";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { useLoginMutation } from "../store/api/auth";
import { setUserInfo, setMessage } from "../store/slices/auth-slice";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.userInfo);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loginUser, { isLoading, error, isError }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handlingInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);
  const handlingSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser(formData).unwrap();
      console.log("User Login Success!!", userData); // Debug log
      dispatch(setUserInfo(userData));
      if (error) {
        toast.success("Login Failed. ");
      }
    } catch (err) {
      //toast.error("Login Failed. ", err);
      //dispatch(setMessage("Login has failed.", err));
      console.error("Failed to login:", err);
    }
  };

  const reachGoogle = () => {
    const clientID =
      "822106881022-g7r071bn33v71g7gdqtp4shc0vjfp0of.apps.googleusercontent.com";
    const callBackURI = "http://localhost:3000/";
    window.location.replace(
      `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${callBackURI}&prompt=consent&response_type=code&client_id=${clientID}&scope=openid%20email%20profile&access_type=offline`
    );
  };
  if (isAuthenticated) {
    return <Navigate to={"../"}></Navigate>;
  }

  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of The Cage SShop Online | Vape and Smoke Accessories."
      />
      <ToastContainer position="top-right" />
      <LayoutTwo>
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Login", path: process.env.PUBLIC_URL + pathname },
          ]}
          backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />
        
        <Container className="py-4 login-form-container">
          <div className="main-box">
            <h2 className="text-center mb-4">Login</h2>
            <form className="mb-3" onSubmit={(e) => handlingSubmit(e)}>
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
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  value={password}
                  onChange={(e) => handlingInput(e)}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password ..."
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn login-button" type="submit">
                  Login
                </button>
              </div>
              <div className="d-grid gap-2 mt-2">
                <button
                  className="btn login-button"
                  type="button"
                  onClick={reachGoogle}
                >
                  Login With Google
                </button>
              </div>
            </form>
            <p className="text-light">
              Forgot your password?{" "}
              <Link className="login-link" to={"../reset/password/"}>
                Reset Password
              </Link>
            </p>
            <p className="text-light">
              Don't have any account?{" "}
              <Link className="login-link" to={"../register"}>
                Signup
              </Link>
            </p>
          </div>
        </Container>
      </LayoutTwo>
    </Fragment>
  );
};

export default Login;
