import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      )}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{t("Home")}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-catalog/vapes"}>
              {t("Vapes")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu mega-menu-padding">
              <li>
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/geekBar"}>
                      {t("Geek Bar")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-catalog/lostMary"}
                    >
                      {t("Lost Mary")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-catalog/primeBar"}
                    >
                      {t("Prime Bar")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-catalog/funkyLands"}
                    >
                      {t("Funky Lands")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/breeze"}>
                      {t("Breeze Smoke")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/elfBar"}>
                      {t("Elf Bar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/plena"}>
                      {t("Plena 18k")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/flum"}>
                      {t("Flum")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/elux"}>
                      {t("Elux")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/hyppe"}>
                      {t("Hyppe")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/bugatti"}>
                      {t("Bugatti")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Vape Flavors")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Exotic")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Sweet")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Fruity")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Tobacco")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Dessert")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Citrus")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Mint")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Candy")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Sweet Ice")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Sweet Citrus")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Fruity Ice")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {t("Tanks & Mods")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Geek Vape")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {t("Smok")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/vaporesso"
                      }
                    >
                      {t("Vaporesso")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-standard/voopoo"}
                    >
                      {t("VooPoo")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/freemax"
                      }
                    >
                      {t("FreeMax")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/lostVape"
                      }
                    >
                      {t("Lost Vape")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-standard/uwell"}
                    >
                      {t("UWELL")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-standard/sourin"}
                    >
                      {t("Suorin")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-standard/miPod"}
                    >
                      {t("Mi-Pod")}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard/eliquid"}>
              {" "}
              {t("E-Liquid")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-standard/miPod"}
                    >
                      {t("E-Liquid")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/vapetasia"
                      }
                    >
                      {t("Vapetasia")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/podJuice"
                      }
                    >
                      {t("Pod Juice")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/shop-grid-standard/candyKings"
                      }
                    >
                      {t("Candy Kings")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/shop-grid-standard/cloudNerdz"
                      }
                    >
                      {t("Cloud Nurdz Iced")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/juiceHead"
                      }
                    >
                      {t("Juice Head")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/shop-grid-standard/coastalClouds"
                      }
                    >
                      {t("Coastal Clouds")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-standard/orgnx"}
                    >
                      {t("Orgnx")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-standard/daze"}
                    >
                      {t("Reds & Daze")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-standard/naked"}
                    >
                      {t("Naked 100")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-standard/twist"}
                    >
                      {t("Twist")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-grid-standard/humble"}
                    >
                      {t("Humble")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid"}>
                      {t("Salt Nic")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/dazeSalt"
                      }
                    >
                      {t("Daze Salt Series")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/shop-grid-standard/airFactory"
                      }
                    >
                      {t("Air Factory")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/shop-grid-standard/vapetasiaSalts"
                      }
                    >
                      {t("Vapetasia Salts")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/saltNkd"
                      }
                    >
                      {t("Salt Nkd 100")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/podJuice"
                      }
                    >
                      {t("Pod Juice")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/orgnxSalt"
                      }
                    >
                      {t("Orgnx Salt Nic")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/shop-grid-standard/juiceHeadSalts"
                      }
                    >
                      {t("Juice Head Salts")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/shop-grid-standard/cloudNurdzSalts"
                      }
                    >
                      {t("Cloud Nurdz Salts")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/shop-grid-standard/ccloudSalt"
                      }
                    >
                      {t("Coastal Clouds")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/shop-grid-standard/twistSalt"
                      }
                    >
                      {t("Twist Nicotine Salt")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/banner/banner-12.png"
                        }
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard/smoke"}>
              {t("Smoke")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/shop-grid-standard/vaporizers"}
                >
                  {t("Vaporizers")}
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/shop-grid-standard/dabRigs"}
                >
                  {t("Dab Rigs")}
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/shop-grid-standard/handPipes"}
                >
                  {t("Hand Pipes")}
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/shop-grid-standard/waterPipes"}
                >
                  {t("Water Pipes")}
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/shop-grid-standard/custom"}
                >
                  {t("Custom Glass")}
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/shop-grid-standard/rollPapers"}
                >
                  {t("Rolling Papers")}
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/shop-grid-standard/hookahs"}
                >
                  {t("Hookahs")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={process.env.PUBLIC_URL + "/shop-grid-standard/accessories"}
            >
              {t("Accessories")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/shop-grid-standard/grinder"}
                >
                  {t("Grinders & Trays")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard/coils"}>
                  {t("Replacement Coils")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard/parts"}>
                  {t("Replacement Parts")}
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/shop-grid-standard/specialty"}
                >
                  {t("Specialty Items")}
                </Link>
              </li>
            </ul>
          </li>
          {/*<li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {t("Contact Us")}
            </Link>
          </li>*/}
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
