import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skills/Skill";
import Works from "./components/Works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Intro />
        <Skill />
        <Works />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
