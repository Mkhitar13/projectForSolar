import styles from "../pages/pages.module.scss";
import {
      Link
} from "react-router-dom";
import { motion } from "framer-motion";

const Pages = ({ isShown, setIsShown }) => {
      return (
            <motion.div
                  id={styles.containerOfPages}
                  animate={{
                        display: !isShown ? "grid" : "none"
                  }}
            >
                  <div id={styles.firstColumnOfPages}>
                        <h2>Pages</h2>
                        <div id={styles.listOfFirstSection}>
                              <p id={styles.ContainerOfLinks}>
                                    <Link id={styles.item1} to="/Home">Home</Link>
                                    <Link id={styles.item2} to="/about">About</Link>
                                    <Link id={styles.item3} to="/blog">Blog</Link>
                                    <Link id={styles.item4} to="/pages">Pages</Link>
                              </p>
                              <p id={styles.ContainerOfLinks}>
                                    <Link id={styles.item5} to="/services">Services</Link>
                                    <Link id={styles.item6} to="/Home">Case Studies</Link>
                                    <Link id={styles.item7} to="/Home">Case Study Single</Link>
                                    <Link id={styles.item8} to="/Home">Blog Post</Link>
                              </p>
                              <p id={styles.ContainerOfLinks}>
                                    <Link id={styles.item9} to="/Home">Careers</Link>
                                    <Link id={styles.item10} to="/Home">Careers Single</Link>
                                    <Link id={styles.item11} to="/Home">Pricing</Link>
                                    <Link id={styles.item12} to="/Home">Pricing Single</Link>
                              </p>
                        </div>
                  </div>

                  <div id={styles.secondColumnOfPages}>
                        <h2>Utility pages</h2>
                        <p>
                              <Link to="/Home">Start Here</Link>
                              <Link to="/Home">Style Guide</Link>
                              <Link to="/Home">Password Protected</Link>
                              <Link to="/Home">404 Not Found</Link>
                              <Link to="/Home">Licenses</Link>
                              <Link to="/Home">Changelog</Link>
                              <b>
                                    <Link to="/Home">Browse More Templates</Link>
                              </b>
                        </p>
                  </div>
            </motion.div>
      )
}
export default Pages;