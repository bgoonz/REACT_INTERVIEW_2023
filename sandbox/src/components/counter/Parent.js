import Child from "./Child";
import { Fragment, useContext } from "react";
import CountContext from "../../context/store";
function Parent() {
  const ctx = useContext(CountContext);
  console.log(ctx);
  return (
    <Fragment>
      <h1>Parent</h1>
      <Child />
      <p>Count: {ctx.count}</p>
    </Fragment>
  );
}

export default Parent;
