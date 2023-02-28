
import './App.scss';
import Header from "./components/header/Header";
import AnimatedRoutes from "./components/animation/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { ButtonOfRegistration } from './components/buttonOfRegistration/ButtonOfRegistration';

function App() {

  return (
    <div id='app'>
      <Router>
        <ButtonOfRegistration />
        <Header />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}
export default App;