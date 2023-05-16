import { useSelector } from "react-redux";
import Card from "./UI/Card";
const Display = () => {
  const { firstName, lastName, email } = useSelector((state) => state.form);
  return (
    <Card className="output">
      <h3>Form Submission:</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </Card>
  );
};
export default Display;
