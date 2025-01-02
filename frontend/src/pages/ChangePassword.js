import React, { Fragment, useState } from "react";
import {
  Navigate,
  useLocation
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import SEO from "../components/seo";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { useChangePasswordMutation } from "../store/api/auth";

// Change Password Component
const ChangePassword = () => {

  // pathname for breadcrumb component "Home / Change Password"
  const { pathname } = useLocation();

  // Get isAuthenticated state from AuthReducer
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Element to store form data to pass to RTK Query endpoint
  const [formData, setFormData] = useState({
    new_password1: "",
    new_password2: "",
    old_password: "",
  });
  
  // Stores funtion to call RTK Query endpoint, useChangePasswordMutation.
  const [changePassword] = useChangePasswordMutation();

  const { new_password1, new_password2, old_password } = formData;

  // Function to manage form input.
  const handlingInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  // Funtion to handle form submission. Calls changePassword function and passes formData.
  const handlingSubmit = async (e) => {
    e.preventDefault();
    try {
      const passwordStatus = await changePassword(formData).unwrap();
      console.log("User Login Success!!", passwordStatus); // Debug log
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  // If not authenticated navigate to login page.
  if (!isAuthenticated && !localStorage.getItem("access")) {
    return <Navigate to={"../login"}></Navigate>;
  }
  return (
    <Fragment>
      <SEO
        titleTemplate="Change Password"
        description="Change Password page of The Cage SShop Online | Vape and Smoke Accessories."
      />
      <LayoutTwo headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Change Password", path: process.env.PUBLIC_URL + pathname },
          ]}
          backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />
        <Container className="py-4 login-form-container">
          <div className="main-box">
            <h2 className="text-center mb-4">Change Password</h2>
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
              <div className="mb-3">
                <label htmlFor="old_password" className="form-label">
                  Old Password
                </label>
                <input
                  name="old_password"
                  value={old_password}
                  onChange={(e) => handlingInput(e)}
                  type="password"
                  className="form-control"
                  id="old_password"
                  placeholder="Old password ..."
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </Container>
      </LayoutTwo>
    </Fragment>
  );
};


export default ChangePassword;
