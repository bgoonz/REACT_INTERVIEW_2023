import classes from "./Grid.module.css";
const Grid = (props) => {
  function numArr(num) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }
  function isPrime(num) {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
  function colorClass(num) {
    if (isPrime(num)) {
      return "red";
    } else if (num % 2 === 0) {
      return "green";
    } else {
      return "yellow";
    }
  }

  return (
    <div className={classes["grid-container"]}>
      {numArr(props.number).map((num) => {
        return (
          <p key={num} className={`${classes["grid-item"]} ${colorClass(num)}`}>
            {num}
          </p>
        );
      })}
    </div>
  );
};

export default Grid;
