import React, { useState } from "react";
const Field = () => {
  let [todo, setTodo] = useState("");
  let [old, setOld] = useState([]);
  let handleChange = e => {
    setTodo(e.target.value);
  };
  let handleSubmit = e => {
    e.preventDefault();
    if (todo != "") {
     setOld(oldval => {
       return [...oldval, todo];
     });
     setTodo(""); 
    }
  };
  let toggle = e => {
    if (e.target.className === "li") {
      e.target.classList.toggle("checked");
    } else {
      e.target.classList.toggle("checked");
    }
  };
  let deltask = e => {
    e.preventDefault();
    let delid = e.target.parentElement.id;
    console.log(delid);
    old.splice(delid, 1);
    setOld([...old]);
    // console.log(old.splice(delid, 1));
    setTodo("");
  };
  let handleedit = e => {
    e.preventDefault();
    let newEdit = todo;
    if (e.target.id == e.target.parentElement.id.slice(4)) {
      newEdit = e.target.value;
      setTodo(newEdit);
      console.log(todo);
      console.log(old);
      old.splice(e.target.id, 1, e.target.value);
      setOld(_ => {
        return [...old];
      });
      console.log(old);
      setTodo("");
    }
    // console.log(e.key);
    // setTodo(newEdit);
    // console.log(e.target.className);
    // old[e.target.className] = newEdit;
    // console.log(old);
    // setOld(_ => {
    //   return [...old];
    // });
  };
  return (
    <section id="field">
      <article>
        <form onSubmit={handleSubmit}>
          <input
            value={todo}
            type="text"
            name="todoitem"
            id="todoitem"
            placeholder="Add a task . . ."
            onChange={handleChange}
          />
          &nbsp;&nbsp;
          <button id="add">
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </form>
      </article>
      <div id="display">
        <ul>
          {old.map((v, i) => {
            // console.log(old);
            return (
              <li key={i} className="li" id={`key-${i}`} onClick={toggle}>
                <input
                  id={`${i}`}
                  name="list"
                  onChange={handleedit}
                  value={v}
                ></input>
                &nbsp;
                <button id={`${i}`} onClick={deltask}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Field;
