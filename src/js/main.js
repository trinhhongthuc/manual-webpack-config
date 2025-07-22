import { getName } from "src/helper/helper";
import "../css/styles.css";
import dog from "../images/dog.jpg";

getName('1231321')

console.log("LOGO:", process.env.NODE_ENV);
function addTodo() {
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const text = input.value.trim();

//   const result = "hello" |> ((x) => x.toUpperCase()) |> ((x) => `${x} world`);

  if (text !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
        <img src="${dog}" alt="">

          <span onclick="this.parentElement.classList.toggle('completed')">${text}</span>
          <button onclick="this.parentElement.remove()">✖</button>
        `;
    list.appendChild(li);
    input.value = "";
  }
}

window.addTodo = addTodo;
