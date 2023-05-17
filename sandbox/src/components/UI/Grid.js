import classes from "./Grid.module.css";
const Grid = ({ components }) => {
  return (
    <div className={classes["grid-container"]}>
      {components.map((Component, index) => (
        <div className={classes["grid-item"]} key={index}>
          <Component />
        </div>
      ))}
    </div>
  );
};

export default Grid;
