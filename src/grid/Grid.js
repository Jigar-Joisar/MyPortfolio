import Footer from "../footer/Footer";
import Main from "../mainContent/Main";
import NavBar from "../navBar/NavBar";
import "./grid.css";
import { useState } from "react";

function Grid() {
  const [nav, setNav] = useState("-1");
  return (
    <div className="grid-container">
      <div className="item1">
        <NavBar onChange={(newNav) => setNav(newNav)} />
      </div>

      <div className="item3">
        <Main index={nav} />
      </div>
      <div className="item5">
        <Footer />
      </div>
    </div>
  );
}

export default Grid;
