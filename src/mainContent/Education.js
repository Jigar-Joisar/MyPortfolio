import "./Main.css";
import "./Common.css";
function Education() {
  return (
    <div>
      <h1>Education</h1>
      <br />
      <ul>
        <li style={{ "--accent-color": "#4CADAD" }}>
          <div className="date">2020</div>
          <div className="title">B.Tech</div>
          <div className="descr">
            Gold Medalist in B.Tech batch of 2020 from VJTI, Mumbai.
          </div>
        </li>
        <li style={{ "--accent-color": "#41516C" }}>
          <div className="date">2016-2020</div>
          <div className="title">B.Tech </div>
          <div className="descr">
            I have completed B.Tech in Electronics and Telecommunications from
            VJTI, Mumbai.
            <br />
            <div>
              <b>CGPA : 9.45/10</b>
            </div>
          </div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className="date">2016</div>
          <div className="title">H.S.C</div>
          <div className="descr">
            I have completed my H.S.C from Maharashtra board with{" "}
            <b> 95.08% </b>.
          </div>
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className="date">2014</div>
          <div className="title">S.S.C</div>
          <div className="descr">
            I have completed my S.S.C from Maharashtra board with <b>94.60%</b>.
          </div>
        </li>
        {/*
        <li style={{ "--accent-color": "#1B5F8C" }}>
          <div className="date">2017</div>
          <div className="title">Title 4</div>
          <div className="descr">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
            cumque.
          </div>
        </li>
        <li style={{ "--accent-color": "#4CADAD" }}>
          <div className="date">2022</div>
          <div className="title">Title 5</div>
          <div className="descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default Education;
