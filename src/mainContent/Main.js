import Certifications from "./Certifications";
import ContactMe from "./ContactMe";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import "./Main.css";

function Main({ index }) {
  return (
    <div className="card">
      {index <= 0 && <Home />}
      {index === 1 && <Education />}
      {index === 2 && <Experience />}
      {index === 3 && <Certifications />}
      {index === 4 && <ContactMe />}
    </div>
  );
}

export default Main;
