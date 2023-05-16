import "./App.css";
import Grid from "./components/UI/Grid";
import Spacer from "./components/UI/Spacer";
import List from "./components/add-remove-list-items/List";
import Counter from './components/count-between-one-and-five/Counter';
import Parent from "./components/counter/Parent";
import DisableButton from "./components/disable-button/DisableButton";
import DisplayInput from "./components/display-input-text/DisplayInput";
import Users from "./components/display-users/Users";
import FetchComments from "./components/fetch-comments/FetchComments";
import Sum from "./components/sum-of-numbers/Sum";
import Toggle from "./components/toggle-show-hide/Toggle";
import ParentComponent from "./components/update-parent-state/ParentComponent";
import { CountContextProvider } from "./context/store";

function App() {
    const components = [ Counter, Sum, List, FetchComments, Users, Toggle, DisplayInput, DisableButton, ParentComponent, Counter]
  return (
    <div className="App">
      <h1>React Interview Challenges</h1>
      <Grid components={components} />
      <Spacer />
      <CountContextProvider>
        <Parent />
      </CountContextProvider>
     
    </div>
  );
}

export default App;
