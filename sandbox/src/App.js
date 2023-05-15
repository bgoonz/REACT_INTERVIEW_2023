import Spacer from "./components/UI/Spacer";
import Parent from "./components/counter/Parent";
import { CountContextProvider } from "./context/store";
import List from "./components/add-remove-list-items/List";
import FetchComments from "./components/fetch-comments/FetchComments";
import Users from "./components/display-users/Users";
import Toggle from "./components/toggle-show-hide/Toggle";
import DisplayInput from "./components/display-input-text/DisplayInput";

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
      <FetchComments />
      <Spacer />
      <Users />
      <Spacer />
      <Toggle />
      <Spacer />
      <DisplayInput />
    </div>
  );
}

export default App;
