const Grid = (props) => {
  function numArr(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <div>
      {numArr(props.number).map((num) => {
        return <p>{num}</p>;
      })}
    </div>
  );
};

export default Grid;
