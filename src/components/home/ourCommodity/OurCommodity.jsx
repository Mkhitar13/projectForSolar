import styles from "../ourCommodity/ourCommodity.module.scss";
import firstImgOfOurCommodity from "../../../images/firstImgOfOurCommodity.png";
import secondImgOfOurCommodity from "../../../images/secondImgOfOurCommodity.png";
import thirdImgOfOurCommodity from "../../../images/thirdImgOfOurCommodity.png";
import fourthImgOfOurCommodity from "../../../images/fourthImgOfOurCommodity.png";
import fifthImgOfOurCommodity from "../../../images/fifthImgOfOurCommodity.png";
import sixthImgOfOurCommodity from "../../../images/sixthImgOfOurCommodity.png";

import { HalfCircle, HalfSquare } from "../../../ready-made-items/ReadyMadeItems";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurCommodity = () => {

      const animationForOurCommodity = {
            hidden: {
                  scale: 0.5,
            },
            visible: {
                  scale: 1,
            },
      };
      const animationForOurCommodityTitle = {
            hidden: {
                  y: -200,
            },
            visible: {
                  y: 0,
                  duration: 2.5
            },
      };

      const ref = useRef(null);
      const ourCommodityView = useInView(ref);

      useEffect(() => {
            ourCommodityView
                  ? document.querySelector(`#${styles.containerOfOurCommodity}`).display += "grid"
                  : document.querySelector(`#${styles.containerOfOurCommodity}`).display += "none";

      }, [ourCommodityView]);

      return (
            <section id={styles.parentCotainerOfOurCommodity}>
                  <motion.div
                        id={styles.containerOfOurCommodity}
                        variants={animationForOurCommodity}
                        initial="hidden"
                        whileInView="visible"
                        ref={ref}
                  >

                        <div id={styles.circleOfOurCommodity}><HalfCircle /></div>

                        <motion.div
                              id={styles.mainTitleOfOurCommodity}
                              variants={animationForOurCommodityTitle}
                              initial="hidden"
                              whileInView="visible"
                        >
                              <h2>We are development experts on <br /> all
                                    <span> technologies </span>
                                    & <span>platforms </span>
                              </h2>
                        </motion.div>

                        <div id={styles.containerOfAllItems}>
                              <div className={styles.containerOfEachItem}>
                                    <div className={styles.containerOfEachImg}><img src={firstImgOfOurCommodity} alt="img" /></div>
                                    <div className={styles.containerOfEachTitleAndText}>
                                          <h3>Frontend Development</h3>
                                          <p>Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.</p>
                                    </div>
                              </div>
                              <div className={styles.containerOfEachItem}>
                                    <div className={styles.containerOfEachImg}><img src={secondImgOfOurCommodity} alt="img" /></div>
                                    <div className={styles.containerOfEachTitleAndText}>
                                          <h3>Backend Development</h3>
                                          <p>Vitae sapien pellentesque habitant morbi tristique senectus et faucibus aolm.</p>
                                    </div>
                              </div>
                              <div className={styles.containerOfEachItem}>
                                    <div className={styles.containerOfEachImg}><img src={thirdImgOfOurCommodity} alt="img" /></div>
                                    <div className={styles.containerOfEachTitleAndText}>
                                          <h3>Mobile App Development</h3>
                                          <p>Integer vitae justo eget magna fermentum iaculis eu pretium quam vulputate.</p>
                                    </div>
                              </div>
                              <div className={styles.containerOfEachItem}>
                                    <div className={styles.containerOfEachImg}><img src={fourthImgOfOurCommodity} alt="img" /></div>
                                    <div className={styles.containerOfEachTitleAndText}>
                                          <h3>AI & Machine Learning</h3>
                                          <p>Nibh nisl condimentum id venenatis lectus proin nibh nisl condimentum id venenatis</p>
                                    </div>
                              </div>
                              <div className={styles.containerOfEachItem}>
                                    <div className={styles.containerOfEachImg}><img src={fifthImgOfOurCommodity} alt="img" /></div>
                                    <div className={styles.containerOfEachTitleAndText}>
                                          <h3>Databases & Data Science</h3>
                                          <p>Eu sem integer vitae justo eget magnalom fermentum sulputate odio ut enim.</p>
                                    </div>
                              </div>
                              <div className={styles.containerOfEachItem}>
                                    <div className={styles.containerOfEachImg}><img src={sixthImgOfOurCommodity} alt="img" /></div>
                                    <div className={styles.containerOfEachTitleAndText}>
                                          <h3>Servers & Cloud Infrastructure</h3>
                                          <p>At ultrices mi tempus imperdiet nulla arcu cursus vitae congue mauris rhoncus.</p>
                                    </div>
                              </div>
                              <div id={styles.borderBottomOfOurCommodityFirstLayer}>
                                    <HalfSquare />
                              </div>
                        </div>
                        <motion.div id={styles.containerOfOurCommodityButtons}>
                              <button id={styles.firstButtonOfOurCommodity}>CONTACT US</button>
                              <button id={styles.secondButtonOfOurCommodity}>Browse all our services</button>
                        </motion.div>
                  </motion.div>
            </section>
      )
}
export default OurCommodity;

