import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Alert from "../components/alert";
import ScrollToTop from "./partials/scroll-to-top/index";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

import { useVerifyMutation, useGetUserQuery, useGoogleLoginMutation } from "../store/api/auth";

const LayoutThree = ({
  children,
  message,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass,
}) => {
  const location = useLocation();
  const [verify] = useVerifyMutation();
  const { data: user, isLoading: userLoading } = useGetUserQuery();
  const [googleLogin] = useGoogleLoginMutation();

  useEffect(() => {
    const values = queryString.parse(location.search);
    const code = values.code;
    if (code) {
      googleLogin(code).catch((err) => console.error("Google Login Failed:", err));
    }
  }, [location, googleLogin]);

  return (
    <Fragment>
      <Header
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}
      />
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
      <ScrollToTop />
    </Fragment>
  );
};

LayoutThree.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string,
};

export default LayoutThree;
