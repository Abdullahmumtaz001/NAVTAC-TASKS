// First, import React and the hooks we need
import React from "react";
import { useState, useEffect } from "react";

// Define our functional component
function LifecycleFunctionalComponent() {
  // Declare a state variable "count" with initial value 0
  // "setCount" is the function we will use to update it
  const [count, setCount] = useState(0);

  // useEffect runs after the component is rendered
  // It will also run again whenever "count" changes
  useEffect(function () {
    console.log("Component mounted or updated. Current count = " + count);

    // Return a cleanup function
    // This runs before the next effect OR when the component is unmounted
    return function () {
      console.log("Cleanup before next update OR component unmount.");
    };
  }, [count]); // Dependency array: effect runs whenever "count" changes

  // Function to increase the count value by 1
  function increment() {
    setCount(count + 1);
  }

  // JSX that defines what will appear on the screen
  return (
    <div
      style={{
        border: "1px solid #888",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <h2>Functional Component Lifecycle</h2>
      <p>
        This is a simple example to show lifecycle behavior in a functional
        component.
      </p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <ul>
        <li>
          <b>useEffect (mount)</b>: Runs after component is added
        </li>
        <li>
          <b>useEffect (update)</b>: Runs after every update (when count
          changes)
        </li>
        <li>
          <b>Cleanup function</b>: Runs before next effect or when component is
          removed
        </li>
      </ul>
    </div>
  );
}

// Export so this component can be used in main.jsx or App.jsx
export default LifecycleFunctionalComponent;
