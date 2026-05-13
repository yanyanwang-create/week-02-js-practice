let count = 0;
const display = document.getElementById("count-display");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");


function updateDisplay() {
  display.textContent = count;
}


incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});


decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});


resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});


const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");


addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;


  const newTodo = document.createElement("li");
  newTodo.textContent = text;


  newTodo.addEventListener("click", () => {
    newTodo.style.textDecoration = 
      newTodo.style.textDecoration === "line-through" 
        ? "" 
        : "line-through";
  });


  todoList.appendChild(newTodo);
  input.value = "";
  input.focus();
});


input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});