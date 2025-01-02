import React, { Fragment, useState } from "react";
import {
  Navigate,
  useParams,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { useEmailVerificationMutation } from "../store/api/auth";

const EmailVerification = () => {
  const { pathname } = useLocation();
  const [verifyEmail, { isLoading, error, isError }] = useEmailVerificationMutation();
  const [ status, setStatus ] = useState(false);
  console.log("Status is set to: ", status);
  const { key } = useParams();
  const handlingSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailStatus = await verifyEmail(key);
      console.log("User Login Success!!", emailStatus); // Debug log
    } catch (err) {
      console.error("Failed to login:", err);
    }
    setStatus(true);
  };

  if (status) {
    return <Navigate to={"../login"}></Navigate>;
  }
  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Email verification page of The Cage SShop Online | Vape and Smoke Accessories."
      />
      <Layout headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Verify Email", path: process.env.PUBLIC_URL + pathname },
          ]}
          backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />
        <Container className="py-4 login-form-container">
          <div className="main-box">
            <h2 className="text-center mb-4">Activate Account</h2>
            <h5 className="text-center mb-4">
              Click the bellow link to activate your account
            </h5>
            <form className="mb-3" onSubmit={(e) => handlingSubmit(e)}>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Activate Account
                </button>
              </div>
            </form>
          </div>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default EmailVerification;
