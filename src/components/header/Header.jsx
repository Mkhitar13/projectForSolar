import styles from "../header/header.module.scss";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AnimatedRoutes from "../animation/AnimatedRoutes";
import Pages from "../pages/Pages";
import { GiShinyOmega } from "react-icons/gi";
import { GiSunRadiations } from "react-icons/gi";
import ButtonOfMiniNav from "../menuForMiniDisplay/buttonOfMiniNav/ButtonOfMiniNav";
import MainOfMiniMenu from "../menuForMiniDisplay/mainOfMiniMenu/MainOfMiniMenu";
import { motion, useInView } from "framer-motion";

const Header = () => {

      const animationForHeader = {
            hidden: {
                  y: 80,
            },
            visible: {
                  y: 0,
            },
      };

      const [isShown, setIsShown] = useState(false);
      const [isShownMiniMenu, setIsShownMiniMenu] = useState(false);
      const [toggleOfTheMiniMenu, setToggleOfTheMiniMenu] = useState(false);

      const handleClick = () => {
            setIsShown(current => !current);
      };

      const toggleMiniMenu = () => {
            setIsShownMiniMenu(!isShownMiniMenu);
            setToggleOfTheMiniMenu(!toggleOfTheMiniMenu);
      };

      useEffect(() => {
            document.addEventListener("click", () => setIsShown(false));
      }, []);

      const ref = useRef(null);
      const headerView = useInView(ref);

      useEffect(() => {
            headerView
                  ? document.querySelector(`#${styles.headerContainer}`).display += "grid"
                  : document.querySelector(`#${styles.headerContainer}`).display += "none";

      }, [headerView]);

      return (
            <Router>
                  <motion.div
                        id={styles.headerContainer}
                        variants={animationForHeader}
                        initial="hidden"
                        whileInView="visible"
                        ref={ref}
                  >
                        <header id={styles.header}>
                              <div id={styles.headerIconContainer}>
                                    <div id={styles.icon}><GiShinyOmega size="35px" color="#2166FF" /></div>
                                    <div id={styles.textByIcon}>SUN</div>
                              </div>
                              <nav>
                                    <div className={styles.linkContainer}>
                                          <Link to="/Home">Home</Link>
                                    </div>
                                    <div className={styles.linkContainer}>
                                          <Link to="/about">About</Link>
                                    </div>
                                    <div className={styles.linkContainer}>
                                          <Link to="/blog">Blog</Link>
                                    </div>
                                    <div className={styles.linkContainer} id={styles.pages} >
                                          <Link onMouseOver={() => handleClick()}>Pages</Link>
                                          <span id={styles.iconForPages}><GiSunRadiations color="#2166FF" size="25px" /></span>

                                    </div>
                                    <div className={styles.linkContainer}>
                                          <Link to="/services">Services</Link>
                                    </div>
                                    <div className={styles.linkContainer}>
                                          <Link to="/cart">Cart</Link>
                                    </div>
                              </nav>
                              <div id={styles.headerButtonAndMiniButtonOfMenuAndCartSection}>

                                    <div id={styles.cartSectionForMiniDisplay}>
                                          <a href="#">Cart(O)</a>
                                    </div>

                                    <div id={styles.headerButton}>
                                          <button>Contact Us</button>
                                    </div>

                                    <div id={styles.menuForMiniDisplay} onClick={toggleMiniMenu}>
                                          <ButtonOfMiniNav />
                                    </div>
                              </div>
                        </header>
                  </motion.div>

                  {isShown ? <Pages /> : null}

                  <MainOfMiniMenu
                        toggleOfTheMiniMenu={toggleOfTheMiniMenu}
                        setToggleOfTheMiniMenu={setToggleOfTheMiniMenu}
                  />

                  <AnimatedRoutes />
            </Router >
      )
}
export default Header;