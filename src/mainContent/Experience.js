import "./Main.css";
import "./Common.css";

function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <br />
      <ul>
        <li style={{ "--accent-color": "#41516C" }}>
          <div className="date">2023 - Present</div>
          <div className="title">UBS - SDE 2</div>
          <div className="descr">
            Etiam euismod lectus interdum hendrerit hendrerit. Proin luctus
            gravida erat quis interdum. Phasellus rhoncus purus in ipsum
            convallis vulputate. Morbi ac volutpat tortor. Maecenas in tempor
            odio. Proin fermentum diam quis magna commodo tempus.
          </div>
        </li>
        <li style={{ "--accent-color": "#FBCA3E" }}>
          <div className="date">2020-2023</div>
          <div className="title">UBS - SDE 1</div>
          <div className="descr">
            Etiam euismod lectus interdum hendrerit hendrerit. Proin luctus
            gravida erat quis interdum. Phasellus rhoncus purus in ipsum
            convallis vulputate. Morbi ac volutpat tortor. Maecenas in tempor
            odio. Proin fermentum diam quis magna commodo tempus.
          </div>
        </li>
        <li style={{ "--accent-color": "#E24A68" }}>
          <div className="date">2019</div>
          <div className="title">UBS - Intern</div>
          <div className="descr">
            I have interned at UBS India in Summer of 2019 in Investment banking
            division working in integrating Liquibase for effective management
            of Database scripts.
            <br />
            Recevied PPO for contribution in the above project.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
