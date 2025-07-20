import "../css/styles.css";

function addTodo() {
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const text = input.value.trim();

  if (text !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
          <span onclick="this.parentElement.classList.toggle('completed')">${text}</span>
          <button onclick="this.parentElement.remove()">✖</button>
        `;
    list.appendChild(li);
    input.value = "";
  }
}


window.addTodo = addTodo;
