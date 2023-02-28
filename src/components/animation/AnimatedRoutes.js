import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Cart from "../cart/Cart";
import Registration from "../registration/Registration";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {

      const location = useLocation();

      return (
            <AnimatePresence>
                  <Routes location={location} key={location.pathname}>
                        <Route path="/Registration" element={<Registration />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/" element={<Navigate replace to="/home" />} />
                  </Routes>
            </AnimatePresence>
      );
}
export default AnimatedRoutes;