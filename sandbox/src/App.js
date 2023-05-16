import "./App.css";
import Spacer from "./components/UI/Spacer";
import List from "./components/add-remove-list-items/List";
import Parent from "./components/counter/Parent";
import DisableButton from "./components/disable-button/DisableButton";
import DisplayInput from "./components/display-input-text/DisplayInput";
import Users from "./components/display-users/Users";
import FetchComments from "./components/fetch-comments/FetchComments";
import Sum from "./components/sum-of-numbers/Sum";
import Toggle from "./components/toggle-show-hide/Toggle";
import ParentComponent from "./components/update-parent-state/ParentComponent";
import Counter from './components/count-between-one-and-five/Counter'
import { CountContextProvider } from "./context/store";


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
      <Spacer />
      <DisableButton />
      <Spacer />
      <ParentComponent />
      <Spacer />
      <Sum />
      <Spacer />
      <Counter />
      <Spacer />
    </div>
  );
}

export default App;
