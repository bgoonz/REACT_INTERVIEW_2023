import { useSelector } from "react-redux";
const Display = () => {
  const { firstName, lastName, email } = useSelector((state) => state.form);
  return (
    <div>
      <h3>Form Submission:</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  );
};
export default Display;
