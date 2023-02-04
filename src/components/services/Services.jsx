import styles from "../services/services.module.scss";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const formData = [
      { id: "1", label: "test", name: "name" },
      { id: "2", label: "test2", name: "email" },
      { id: "3", label: "test3", name: "subject" }
];

const containerVariants = {
      hidden: {
            opacity: 0,
            transition: {
                  delay: 1,
                  staggerChildren: 0.1
            }
      },
      visible: {
            opacity: 1,
            transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.2
            }
      }
};

const childVariants = {
      hidden: {
            opacity: 0,
            x: "100vw",
            transition: {
                  ease: "easeIn"
            }
      },
      visible: {
            opacity: 1,
            x: 0,
            transition: {
                  type: "spring",
                  mass: 0.5,
                  damping: 10,
                  stiffness: 80
            }
      }
};

function Services() {
      // use variant instead of Animation Controls
      const [variant, setVariant] = useState("hidden");

      const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.2
      });

      useEffect(() => {
            if (inView) {
                  setVariant("visible");
            }
      }, [inView]);

      // End

      const [show, setShow] = useState(true);
      const [values, setValues] = useState({
            name: "",
            email: "",
            subject: "",
            message: ""
      });
      const handleChange = (event) => {
            const { name, value } = event.target;

            setValues({
                  ...values,
                  [name]: value
            });
      };

      const handleSubmit = (event) => {
            event.preventDefault();
            setShow(false);
      };

      return (
            <Box variant="div" id={styles.containerOfServices}>
                  <Grid container justify="center">
                        <Box
                              component="form"
                              style={{ overflow: "hidden" }}
                              onSubmit={handleSubmit}
                        >
                              <Typography>
                                    Animate Presence not working after clicking SEND.
                              </Typography>

                              <AnimatePresence exitBeforeEnter>
                                    {show && (
                                          <motion.div
                                                ref={ref}
                                                variants={containerVariants}
                                                initial="hidden"
                                                animate={variant} // use variant instead of Animation Controls
                                                exit="hidden"
                                          >
                                                {formData.map((item) => (
                                                      <motion.div key={item.id} variants={childVariants}>
                                                            <TextField
                                                                  id={item.label}
                                                                  name={item.name}
                                                                  value={values[item.name]}
                                                                  onChange={(event) => handleChange(event)}
                                                                  fullWidth={true}
                                                                  label={item.label}
                                                                  margin="dense"
                                                                  variant="outlined"
                                                                  size="medium"
                                                            // color="#1862AC"
                                                            />
                                                            <br />
                                                      </motion.div>
                                                ))}

                                                <motion.div variants={childVariants}>
                                                      <TextField
                                                            multiline={true}
                                                            id="test4"
                                                            name="description"
                                                            value={values.message}
                                                            onChange={(event) => handleChange(event)}
                                                            fullWidth={true}
                                                            label="test4"
                                                            margin="dense"
                                                            rowsmax="10"
                                                            variant="outlined"
                                                            size="medium"
                                                      />
                                                </motion.div>

                                                <motion.div variants={childVariants}>
                                                      <Button fullWidth={true} variant="outlined" type="submit">
                                                            Send
                                                      </Button>
                                                </motion.div>
                                          </motion.div>
                                    )}
                              </AnimatePresence>
                        </Box>
                  </Grid>
            </Box>
      );
}

export default Services;