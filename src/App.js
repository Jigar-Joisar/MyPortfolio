import "./App.css";
import backgroundH from "./images/test.jpeg";
import Grid from "./grid/Grid";
import { useEffect, useState } from "react";

const styles = {
  backgroundImage: `url(${backgroundH})`,
  backgroundColor: "blue",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
};
function App() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setStart(true);
    }, 5000);
    return () => {
      clearTimeout(myTimeout);
    };
  }, []);

  return (
    <div>
      {start && (
        <div style={styles}>
          <div>
            <Grid />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
