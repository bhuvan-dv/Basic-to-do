import React, { useState } from "react";
import Field from "./Components/Field";
import Header from "./Components/Header";
const App = () => {
//   let [todos, Settodos] = useState([
//     {
//       content: "go to office",
//       isCompleted: true,
//     },
//     {
//       content: "go to iyengar",
//       isCompleted: false,
//     },
//     {
//       content: "attend class",
//       isCompleted: false,
//     },
//   ]);
  return (
    <div>
      <Header />
      <Field />
      {/* <ul>
        {todos.map((todo) => (
          <div className="todo">
            <div className="checkbox" />
            <input type="text" value={todo.content} />
          </div>
        ))}
      </ul> */}
    </div>
  );
};
export default App;
