//create a React component that accepts an "input" prop.
//If the "input" prop is falsy, render a live-updating
//date and time that updates every second.
//If the "input" prop is an array, render the array's
//elements in a list. If the "input" prop is anything
//else, render the value in a <div>.

import DateTime from "./DateTime.js";
import List from "./List.js";

export default function App({ input }) {
  return (
    <div className="App">
      {input ? (
        Array.isArray(input) ? (
          <List array={input} />
        ) : (
          <div>{input}</div>
        )
      ) : (
        <DateTime />
      )}
    </div>
  );
}
