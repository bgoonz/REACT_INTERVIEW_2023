import Spacer from "./components/UI/Spacer";
import Parent from "./components/counter/Parent";
import { CountContextProvider } from "./context/store";
import List from "./components/add-remove-list-items/List";
import "./App.css";

function App() {
  return (
    <div className="App">
          <h1>React Interview Challenges</h1>
          <Spacer />
            <CountContextProvider>
              <Parent />
            </CountContextProvider>
          <Spacer />
          <List />
          <Spacer />
    </div>
  );
}

export default App;
