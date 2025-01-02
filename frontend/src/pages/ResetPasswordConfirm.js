import React, { Fragment, useState, useEffect } from "react";
import { useLocation,useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import LayoutTwo from "../layouts/LayoutTwo";
import { useResetPasswordConfirmMutation } from "../store/api/auth";
import SEO from "../components/seo";
import { setMessage } from "../store/slices/auth-slice";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";

const ResetPasswordConfirm = () => {
  const { pathname } = useLocation();
  
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const { uid, token } = useParams();
  const [formData, setFormData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = formData;
  const [resetPassword, { isLoading, error, isError }] =
    useResetPasswordConfirmMutation();
  const handlingInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlingSubmit = async (e) => {
    e.preventDefault();
    try {
      const reset = await resetPassword(formData);
      console.log("Password reset confirmation Success!!", reset); // Debug log
    } catch (err) {
      dispatch(setMessage("Password reset confirmation has failed.", err));
      console.error("Password reset confirmation failed:", err);
    }
    setStatus(true);
  };
  if (status) {
    return <Navigate to={"../"}></Navigate>;
  }
  return (
    <Fragment>
      <SEO
        titleTemplate="Reset Password Confirmation"
        description="Reset Password Confirmation page of The Cage SShop Online | Vape and Smoke Accessories."
      />
      <LayoutTwo>
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            {
              label: "Reset Password Confirmation",
              path: process.env.PUBLIC_URL + pathname,
            },
          ]}
          backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />
        <Container className="py-4 login-form-container">
          <div className="main-box">
            <h2 className="text-center mb-4">Set Password</h2>
            <form className="mb-3" onSubmit={(e) => handlingSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="new_password1" className="form-label">
                  New Password
                </label>
                <input
                  name="new_password1"
                  value={new_password1}
                  onChange={(e) => handlingInput(e)}
                  type="password"
                  className="form-control"
                  id="new_password1"
                  placeholder="New password ..."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="new_password2" className="form-label">
                  Re New Password
                </label>
                <input
                  name="new_password2"
                  value={new_password2}
                  onChange={(e) => handlingInput(e)}
                  type="password"
                  className="form-control"
                  id="new_password2"
                  placeholder="Re new password ..."
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Set Password
                </button>
              </div>
            </form>
          </div>
        </Container>
      </LayoutTwo>
    </Fragment>
  );
};

export default ResetPasswordConfirm;
