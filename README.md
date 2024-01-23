# Typical Questions:

- What is a closure:

A closure in JavaScript is a powerful concept where a function retains access to its lexical scope even when that function is executed outside of its original scope. This means that a function can remember and access variables from the scope in which it was declared, even after that scope has closed.

### Example of Closure to Create Private State
In JavaScript, closures can be used to create private state by encapsulating variables within a function scope, making them inaccessible from the outside world. Here's an example:

```js
function createCounter() {
    let count = 0; // This is a private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

// The variable 'count' is not accessible from outside.
// console.log(count); // Uncaught ReferenceError: count is not defined
```

In this example, `count` is a private variable within the `createCounter` function. The returned object contains two methods, `increment` and `decrement`, which can access and modify `count`. However, `count` itself is not accessible from outside the `createCounter` function, effectively making it a private variable.

---


## Change count direction:

```js
// create component render button & counter value
//button will increment counter by 1 when pressed up till 5... after 5 button will decrement.

import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    if (value === 5 && goingUp) {
      setGoingUp(false);
    } else if (value === 0 && !goingUp) {
      setGoingUp(true);
    }
  }, [value, goingUp]);

  function clickHandler() {
    if (goingUp) {
      setValue(value + 1);
    } else {
      setValue(value - 1);
    }
  }

  return (
    <div>
      <button onClick={clickHandler}>Counter</button>
      <span>Value: {value}</span>
    </div>
  );
}

export default App;


```
