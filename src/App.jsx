import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfoliolist from "./components/portfoliolist/Portfoliolist";
import Contact from "./components/contact/Contact";
import Toogle from "./components/toogle/Toogle";
import { ThemeContext } from "./context";
import { useContext } from "react";
import Footer from "./components/footer/Footer";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        background: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toogle />
      <Intro />
      <About />
      <Portfoliolist />
      <Contact />
  
    </div>
  );
};

export default App;
