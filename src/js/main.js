import "../css/styles.css";
import bg from "../images/background.png";
import logo from '../images/background2.jpeg';
import dog from '../images/dog.jpg';
console.log("LOGO:", logo);
function addTodo() {
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const text = input.value.trim();

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
