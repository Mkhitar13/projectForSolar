import { useNavigate } from 'react-router-dom';
import stylesOfButtonRegistration from "./buttonOfRegistration.module.scss";
import { GiSunRadiations } from "react-icons/gi";
import { motion } from "framer-motion";

export const ButtonOfRegistration = () => {

      let navigate = useNavigate();

      const handle = () => {
            return navigate("/registration");
      };

      return (
            <motion.section
                  className={stylesOfButtonRegistration.example_container}
                  onClick={handle}
                  id={stylesOfButtonRegistration.registrationButton}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, loop: Infinity, ease: "linear" }}
            >

                  <div id={stylesOfButtonRegistration.refresh}>
                        <GiSunRadiations color="blue" size="50px" />
                  </div>
            </motion.section>
      )
}
