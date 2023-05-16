import Form from "./components/Form";
import Display from "./components/Display";
import Card from "./components/UI/Card";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Card>
        <h1>Subscribe</h1>
        <p style={{ fontSize: "20px" }}>
          Sign up with your email address to recieve news and updates
        </p>
        <Form />
        <Display />
      </Card>
    </div>
  );
}

export default App;
