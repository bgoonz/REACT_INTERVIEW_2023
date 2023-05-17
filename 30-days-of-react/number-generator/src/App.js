import Grid from "./components/Grid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>30 Days Of React</h1>
      <h3>Number Generator</h3>
      <Grid number={31} />
    </div>
  );
}

export default App;
