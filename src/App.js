import "./App.css";
import backgroundH from "./images/bg1.jpg";
import Grid from "./grid/Grid";

const styles = {
  backgroundImage: `url(${backgroundH})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
};
function App() {
  return (
    <div style={styles}>
      <div>
        <Grid />
      </div>
    </div>
  );
}

export default App;
