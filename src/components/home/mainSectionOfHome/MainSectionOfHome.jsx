import { useEffect, useRef } from "react";
import styles from "../mainSectionOfHome/mainSectionOfHome.module.scss";
import { motion, useInView } from "framer-motion";
import imgforhome from "../../../images/imgforhome.png";
// import AOS from "aos";
import { HalfCircle } from "../../../ready-made-items/ReadyMadeItems";

const MainSectionOfHome = () => {

      // const useIsSmall = () => useMediaQuery('(max-width: 900px)');

      const ref = useRef(null);
      const rightSectionOfHome = useInView(ref);
      const leftSectionOfHome = useInView(ref);

      useEffect(() => {
            leftSectionOfHome
                  ? document.querySelector(`#${styles.leftSectionOfHome}`).display += "grid"
                  : document.querySelector(`#${styles.leftSectionOfHome}`).display += "none";

            rightSectionOfHome
                  ? document.querySelector(`#${styles.rightSectionOfHome}`).display += "grid"
                  : document.querySelector(`#${styles.rightSectionOfHome}`).display += "none"

      }, [leftSectionOfHome, rightSectionOfHome]);


      const animationForLeftSection = {
            hidden: {
                  // display: 'none',
                  opacity: 0,
                  y: 150,
            },
            visible: (duration) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                        duration: duration,
                  },
                  // display: 'grid',
            }),
      };

      const animationForRightSection = {
            hidden: {
                  opacity: 0,
                  y: 50,
            },
            visible: (duration) => ({
                  opacity: 1,
                  y: 0,
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
                        layout
                        id={styles.leftSectionOfHome}
                        variants={animationForLeftSection}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        ref={ref}
                        viewport={{ once: true }}
                  >
                        <div id={styles.circleAnimationOfHome}>

                              <HalfCircle />
                        </div>

                        <div
                              id={styles.informationOfLeftSection}
                        >
                              <div id={styles.containerOfHomeTitle}

                              >
                                    <motion.h1
                                          layout
                                          variants={animationForTexts}
                                          initial="hidden"
                                          whileInView="visible"
                                          custom={1}
                                          styles={{ overflow: "hidden" }}
                                          exit={{ opacity: 0, transition: { duration: 0.2 }, display: "none" }}
                                          viewport={{ once: true }}
                                    // ref={ref}
                                    // viewport={{ amount: 0.9 }}
                                    >
                                          We are a top-notch <br />
                                          <motion.span
                                                layout
                                                variants={animationForLeftSection}
                                                initial="hidden"
                                                whileInView="visible"
                                                custom={1}
                                                styles={{ overflow: "hidden" }}
                                                exit={{ opacity: 0, transition: { duration: 0.2 }, display: "none" }}
                                                viewport={{ once: true }}
                                          // ref={ref}
                                          // viewport={{ amount: 0.9 }}
                                          >
                                                development
                                          </motion.span> agency
                                    </motion.h1>
                              </div>
                              <div id={styles.containerOfHomeText}>
                                    <motion.p
                                          layout
                                          variants={animationForTexts}
                                          initial="hidden"
                                          whileInView="visible"
                                          custom={2}
                                          styles={{ overflow: "hidden" }}
                                          exit={{ opacity: 0, transition: { duration: 0.2 }, display: "none" }}
                                          viewport={{ once: true }}
                                    // ref={ref}
                                    // viewport={{ amount: 0.9 }}
                                    >
                                          Lorem ipsum dolor sit amet consectetur adipiscing
                                          eli mattis sit phasellus mollis sit aliquam sit
                                          nullam neque ultrices viverra nam libero justo laoreet sit.
                                    </motion.p>
                              </div >
                              <motion.div id={styles.containerOfHomeButtons}
                                    variants={animationForRightSection}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={3}
                                    styles={{ overflow: "hidden" }}
                                    exit={{ opacity: 0, transition: { duration: 0.2 }, display: "none" }}
                                    viewport={{ once: true }}
                                    layout
                              >
                                    <button id={styles.firstButtonOfHome}>CONTACT US</button>
                                    <button
                                          id={styles.secondButtonOfHome}
                                    >OUR SERVICES</button>
                              </motion.div>
                        </div >
                  </motion.div >

                  <motion.div
                        layout
                        id={styles.rightSectionOfHome}
                        variants={animationForRightSection}
                        initial="hidden"
                        whileInView="visible"
                        custom={2}
                        viewport={{ once: true }}
                        ref={ref}
                  >
                        <img src={imgforhome} alt="img" />
                  </motion.div>
            </section >
      )
}
export default MainSectionOfHome;

