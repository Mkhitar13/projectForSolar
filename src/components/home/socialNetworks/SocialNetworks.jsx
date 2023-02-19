import styles from "../socialNetworks/socialNetworks.module.scss";
import google from "../../../images/iconsOfSocialNetworks/iconOfGoogle.svg";
import facebook from "../../../images/iconsOfSocialNetworks/iconOfFacebook.svg";
import youtube from "../../../images/iconsOfSocialNetworks/iconOfYoutube.svg";
import pinterest from "../../../images/iconsOfSocialNetworks/iconOfPinterest.svg";
import Twitch from "../../../images/iconsOfSocialNetworks/iconOfTwitch.svg";
import { motion } from "framer-motion";

const SocialNetworks = () => {

      const animationForSocialNetworks = {
            hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0,
            },
            visible: (duration) => ({
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                        duration: duration,
                  },
            }),
      };

      return (
            <section id={styles.socialNetworksContainer}>
                  <motion.div
                        id={styles.insideOfBottomBorder}
                        variants={animationForSocialNetworks}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                  >
                        <h3>Trusted by amazing clients</h3>
                        <div id={styles.containerOfImages}>
                              <div className={styles.imgContainer}><img src={google} alt="icon" /></div>
                              <div className={styles.imgContainer}><img src={facebook} alt="icon" /></div>
                              <div className={styles.imgContainer}><img src={youtube} alt="icon" /></div>
                              <div className={styles.imgContainer}><img src={pinterest} alt="icon" /></div>
                              <div id={styles.lastIcon} className={styles.imgContainer}><img src={Twitch} alt="icon" /></div>
                        </div>
                  </motion.div>
                  <div id={styles.borderBottomOfBottomBorder}></div>
            </section>
      )
}
export default SocialNetworks;