import PropTypes from "prop-types";
import { Fragment } from "react";
import ScrollToTop from "./partials/scroll-to-top/index"
import Header from "./partials/Header";
import Footer from "./partials/Footer";


const Layout = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass,
  
}) => {
  return (
    <Fragment>
       <Header
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}        
      />
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

Layout.propTypes = {
  children: PropTypes.node,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default Layout;
