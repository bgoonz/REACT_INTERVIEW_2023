import classes from "./Button.module.css";
const Button = ({ onClick, disabled, text }) => {
  return (
    <>
      <button
        type="submit"
        onClick={onClick}
        disabled={disabled}
        className={classes.button}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
