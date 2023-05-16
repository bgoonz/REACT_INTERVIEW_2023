const SubmitButton = ({ onClick, disabled, text }) => {
  return (
    <>
      <button type="submit" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default SubmitButton;
