function Child(props) {
  return (
    <>
      <div>Child</div>
      <button onClick={props.onPress}>Change Parent Value</button>
    </>
  );
}

export default Child;
