import LicenseStyles from "../license/license.module.scss";
import imgForLicense from "../../../images/imgForLicenseSection.png";
import { VscStarEmpty } from "react-icons/vsc";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const License = () => {

      const ref = useRef(null);
      const rightSectionOfHome = useInView(ref);

      const animationForLicenseWritings = {
            hidden: {
                  y: -50,
            },
            visible: (duration) => ({
                  y: 0,
                  transition: {
                        duration: duration,
                  },
            }),
      };
      const animationForLicenseImg = {
            hidden: {
                  scale: 0.5,
            },
            visible: (duration) => ({
                  scale: 1,
                  transition: {
                        duration: duration,
                  },
            }),
      };
      return (
            <section id={LicenseStyles.containerOfLicense}>
                  <motion.h2
                        variants={animationForLicenseWritings}
                        initial="hidden"
                        whileInView="visible"
                        ref={ref}
                        duration={2}
                  // viewport={{ once: true }}
                  >
                        We are an agile team of
                        <br /> passionate
                        <span> developers </span>
                  </motion.h2>
                  <motion.div
                        id={LicenseStyles.containerOfWritingsAndIcons}
                        variants={animationForLicenseWritings}
                        initial="hidden"
                        whileInView="visible"
                        ref={ref}
                        duration={1}
                  // viewport={{ once: true }}
                  >
                        <div className={LicenseStyles.eachContainerWritingsAndIcons}>
                              <VscStarEmpty color="#2166FF" size="35px" />
                              <p>Deliver your MVP in 4 weeks or less</p>
                        </div>
                        <div className={LicenseStyles.eachContainerWritingsAndIcons}>
                              <VscStarEmpty color="#2166FF" size="35px" />
                              <p>Efficient and scalable infraestructure</p>
                        </div>
                        <div className={LicenseStyles.eachContainerWritingsAndIcons} id={LicenseStyles.lastWritingsAndIcons}>
                              <VscStarEmpty color="#2166FF" size="35px" />
                              <p>Affordable cost for startups</p>
                        </div>
                  </motion.div>
                  <motion.div
                        id={LicenseStyles.containerOfMainImgInLicense}
                        variants={animationForLicenseImg}
                        initial="hidden"
                        whileInView="visible"
                        ref={ref}
                        duration={1}
                  // viewport={{ once: true }}
                  >
                        <img src={imgForLicense} alt="image" />
                  </motion.div>
                  <motion.div
                        id={LicenseStyles.buttonsContainerOfLicense}
                        variants={animationForLicenseWritings}
                        initial="hidden"
                        whileInView="visible"
                        ref={ref}
                        duration={2}
                  // viewport={{ once: true }}
                  >
                        <button id={LicenseStyles.firstButtonOfLicense} >Contact us</button>
                        <button id={LicenseStyles.secondButtonOfLicense} >Meet our team</button>
                  </motion.div>
            </section>
      )
}
export default License;