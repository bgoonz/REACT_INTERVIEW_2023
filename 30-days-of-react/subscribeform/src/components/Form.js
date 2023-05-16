import Input from "./Input";
import Button from "./Button";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName, setEmail } from "./../store/form-slice";
const Form = (props) => {
  const dispatch = useDispatch();
  const handleFirstNameChange = (e) => {
    dispatch(setFirstName(e.target.value));
  };

  const handleLastNameChange = (e) => {
    dispatch(setLastName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

    return (
     
        <form>
          <Input
            type="text"
            onChange={handleFirstNameChange}
            placeholder="First Name"
          />
          <Input
            type="text"
            onChange={handleLastNameChange}
            placeholder="Last Name"
          />
          <Input
            type="email"
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <Button text="Submit"/>
        </form>
 
    );
};
export default Form;
