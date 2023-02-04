import styles from "../header/header.module.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AnimatedRoutes from "../animation/AnimatedRoutes";
import Pages from "../pages/Pages";
import { GiShinyOmega } from "react-icons/gi";
import { GiSunRadiations } from "react-icons/gi";
import ButtonOfMiniNav from "../menuForMiniDisplay/buttonOfMiniNav/ButtonOfMiniNav";
import MainOfMiniMenu from "../menuForMiniDisplay/mainOfMiniMenu/MainOfMiniMenu";

const Header = () => {

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

      return (
            <Router>
                  <div id={styles.headerContainer}>
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
                  </div>

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