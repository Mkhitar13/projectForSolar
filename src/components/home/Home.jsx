
import styles from "../home/home.module.scss";
import imgforhome from "../../images/imgforhome.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
import { motion } from "framer-motion";
// import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {

      // const useIsSmall = () => useMediaQuery('(max-width: 900px)');

      // const isSmall = useIsSmall(); /* or useMediaQuery('(min-width: 480px)'); */

      const animationForLeftSection = {
            hidden: {
                  opacity: 0,
                  y: 150,
            },
            visible: (duration) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                        duration: duration,
                  },
            }),
      };

      const animationForRightSection = {
            hidden: {
                  opacity: 0,
                  x: 50,
            },
            visible: (duration) => ({
                  opacity: 1,
                  x: 0,
                  transition: {
                        duration: duration,
                  },
            }),
      };

      const animationForTexts = {
            hidden: {
                  x: 250,
            },
            visible: (duration) => ({
                  x: 0,
                  transition: {
                        duration: duration,
                  },
            }),
      };

      return (
            <section id={styles.homeContainer}>
                  <motion.div
                        id={styles.leftSectionOfHome}
                        variants={animationForLeftSection}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                  >
                        <div id={styles.circleAnimationOfHome}>
                        </div>

                        <div
                              id={styles.informationOfLeftSection}
                        >
                              <div id={styles.containerOfHomeTitle}

                              >
                                    <motion.h1
                                          variants={animationForTexts}
                                          initial="hidden"
                                          whileInView="visible"
                                          custom={1}
                                    >
                                          We are a top-notch <br />
                                          <motion.span
                                                styles="color=blue"
                                                variants={animationForLeftSection}
                                                initial="hidden"
                                                whileInView="visible"
                                                custom={1}
                                          >
                                                development
                                          </motion.span> agency
                                    </motion.h1>
                              </div>
                              <div id={styles.containerOfHomeText}>
                                    <motion.p
                                          variants={animationForTexts}
                                          initial="hidden"
                                          whileInView="visible"
                                          custom={2}
                                    >
                                          Lorem ipsum dolor sit amet consectetur adipiscing
                                          eli mattis sit phasellus mollis sit aliquam sit
                                          nullam neque ultrices viverra nam libero justo laoreet sit.
                                    </motion.p>
                              </div>
                              <motion.div id={styles.containerOfHomeButtons}
                                    variants={animationForTexts}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={3}
                              >
                                    <button id={styles.firstButtonOfHome}>CONTACT US</button>
                                    <button
                                          id={styles.secondButtonOfHome}
                                    // onClick={() => setIsReset(true) }
                                    >OUR SERVICES</button>
                              </motion.div>
                        </div>
                  </motion.div>

                  <motion.div
                        id="rightSectionOfHome"
                        variants={animationForRightSection}
                        initial="hidden"
                        whileInView="visible"
                        custom={2}
                  >
                        <img src={imgforhome} alt="img" />
                  </motion.div>
            </section >
      )
}
export default Home;

