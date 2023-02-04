import styles from "../mainOfMiniMenu/mainOfMiniMenu.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiSunRadiations } from "react-icons/gi";
import Pages from "../../pages/Pages";

import { motion } from "framer-motion";

const MainOfMiniMenu = ({ toggleOfTheMiniMenu, setToggleOfTheMiniMenu }) => {
      const [isShown, setIsShown] = useState(false);
      const [togglePage, setTogglePage] = useState(false);

      const togleOfPageSide = () => {
            setTogglePage(!togglePage);
      }

      return (
            <motion.div
                  animate={{
                        height: !toggleOfTheMiniMenu ? "0vh" : "90vh",
                        display: !toggleOfTheMiniMenu ? "none" : "grid"
                  }}
                  id={styles.containerOfMiniMenu}
            >
                  <nav>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link to="/Home">Home</Link>
                        </div>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link to="/blog">Blog</Link>
                        </div>

                        <div
                              className={styles.linkContainerForMiniMenu}
                              id={styles.pagesToggleForMiniMenu}
                              onClick={togleOfPageSide}
                        >
                              <Link> Pages </Link>
                              <span id={styles.iconForPages}>
                                    <GiSunRadiations color="#2166FF" size="35px" />
                              </span>
                        </div>
                        <motion.div
                              className={styles.linkContainerForMiniMenu}
                              id={styles.pagesSideInMiniMenu}
                              animate={{
                                    height: !togglePage ? "0vh" : "auto",
                                    display: !togglePage ? "none" : "grid"
                              }}
                        >
                              <Pages isShown={isShown} setIsShown={setIsShown} />
                        </motion.div>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link to="/services">Services</Link>
                        </div>
                        <div className={styles.linkContainerForMiniMenu} id={styles.cartOfLinks}>
                              <Link to="/cart">Cart</Link>
                        </div>
                  </nav>
                  <div id={styles.headerButtonForMiniMenu}>
                        <button>Contact Us</button>
                  </div>
            </ motion.div>
      )
}
export default MainOfMiniMenu;