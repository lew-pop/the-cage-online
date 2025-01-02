import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useResetPasswordMutation } from "../store/api/auth";
import LayoutTwo from "../layouts/LayoutTwo";
import SEO from "../components/seo";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { setMessage } from "../store/slices/auth-slice";

const ResetPassword = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;
  
  const [resetPassword, { isLoading, error, isError }] =
    useResetPasswordMutation();
  
    const handlingInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handlingSubmit = async (e) => {
    e.preventDefault();
    try {
        const reset = await resetPassword(formData);
        console.log("Password reset Success!!", reset); // Debug log
        } catch (err) {
        dispatch(setMessage("Login has failed.", err));
        console.error("Failed to login:", err);
      }
    setStatus(true);
  };
  if (status) {
    return <Navigate to={"../"}></Navigate>;
  }
  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of The Cage SShop Online | Vape and Smoke Accessories."
      />
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
            <h2 className="text-center mb-4">Reset Password</h2>
            <h5 className="text-center mb-4">
              Please input your registered email. The link for set your new
              password will be stent into your email
            </h5>
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
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Send Link
                </button>
              </div>
            </form>
          </div>
        </Container>
      </LayoutTwo>
    </Fragment>
  );
};

export default ResetPassword;
