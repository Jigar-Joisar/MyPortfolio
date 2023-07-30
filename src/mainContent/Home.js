import "./Main.css";

function Home() {
  return (
    <div className="home">
      <div className="left">Hi there stranger!!!</div>
      <div className="left">My name is Jigar Joisar.</div>
      <div className="left">
        A Software Engineer with B.Tech from VJTI, Mumbai building enterprise
        applications for last 3 years.
      </div>
      <div
        className="right"
        style={{ position: "fixed", bottom: "10%", width: "95%" }}
      >
        Glad to see you here.
      </div>
    </div>
  );
}

export default Home;
