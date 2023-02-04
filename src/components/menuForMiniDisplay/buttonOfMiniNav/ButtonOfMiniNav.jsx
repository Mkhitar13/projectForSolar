import { useState } from 'react';
import styles from "./buttonOfMiniNav.module.scss";
import { Divide as Hamburger } from 'hamburger-react';

const ButtonOfMiniNav = () => {
      const [isOpen, setOpen] = useState(false)

      return (
            <div id={styles.container} >
                  <Hamburger toggled={isOpen} toggle={setOpen} />
            </div >
      )
}
export default ButtonOfMiniNav;