import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import {
  useVerifyMutation,
  useGetUserQuery,
  useGoogleLoginMutation,
} from "../store/api/auth";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../components/alert";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LayoutTwo = ({ children }) => {
  let location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.userInfo);
  const message = useSelector((state) => state.auth.message);
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [verify] = useVerifyMutation();
  const { data: userData } = useGetUserQuery();
  const [googleLogin] = useGoogleLoginMutation();
  
  useEffect(() => {
    const values = queryString.parse(location.search);
    const code = values.code;
    if (code) {
      dispatch(googleLogin(code));
    } else {
      if (user) {
        dispatch(verify(token));
      }
    }
  }, [location]);
  return (
    <Fragment>
      <Header
        headerTop="visible"
        top=""
        headerPaddingClass=""
        headerPositionClass=""
      />
    <ToastContainer position="top-right" />
      {message ? <Alert message={message} /> : null}
      {children}

      <Footer
        backgroundColorClass="footer-white"
        spaceLeftClass="ml-70"
        spaceRightClass="mr-70"
        footerTopBackgroundColorClass="bg-gray-2"
        footerTopSpaceTopClass="pt-80"
        footerTopSpaceBottomClass="pb-60"
        copyrightColorClass="copyright-white"
        footerLogo="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/logo_no_pad.png"
      />
    </Fragment>
  );
};
LayoutTwo.propTypes = {
  children: PropTypes.node,
};

export default LayoutTwo;
