import "./NavBar.css";

function NavBar({ onChange }) {
  return (
    <div className="topnav">
      <div>
        <a href="#home" onClick={() => onChange(0)}>
          Home
        </a>
      </div>
      <div>
        <a href="#education" onClick={() => onChange(1)}>
          Education
        </a>
      </div>
      <div>
        <a href="#experience" onClick={() => onChange(2)}>
          Experience
        </a>
      </div>
      <div>
        <a href="#certification" onClick={() => onChange(3)}>
          Certification
        </a>
      </div>
      <div style={{ float: "Right" }}>
        <a href="#contact" onClick={() => onChange(4)}>
          Contact me
        </a>
      </div>
    </div>
  );
}

export default NavBar;
