// import "./style.css";

class List { // skapar en klass som heter List
    toDo;
    finished;

    constructor(toDo, finished) {
        this.toDo = toDo;
        this.finished = finished;
    }
}

const p1 = new List("Handla", false); // skapar nya objekt av klassen List
const p2 = new List("Tvätta", false);
const p3 = new List("Maila", false);
const lists = [p1, p2, p3]; // skapar en array med objekten



const app = document.getElementById("app"); // hämtar elementet med id:t app
app.classList.add("list-group"); // lägger till bootstrap klass för styling



let newTodo = []; // skapar en tom array

const todosFromLS = localStorage.getItem("todos"); // hämtar strängen från localStorage
if (todosFromLS === null) { // om det inte finns något i localStorage
    localStorage.setItem("todos", JSON.stringify(lists)); // Spara objektet i localStorage som en sträng
    newTodo = lists;  // sätter newTodo till lists
} else { 
    newTodo = JSON.parse(todosFromLS); // om det finns något i localStorage parsar strängen till ett objekt och sätter newTodo till det
}



    newTodo.forEach(list => { // för varje sak i listan lists
    const listLi = document.createElement("li"); // skapar en li för varje sak
    listLi.classList.add("list-group-item"); // lägger till bootstrap klass för styling

    const checkbox = document.createElement("input"); // skapar en checkbox
    checkbox.type = "checkbox";
    checkbox.checked = list.finished;
    listLi.appendChild(checkbox);
    listLi.appendChild(document.createTextNode(list.toDo)); // lägger till texten i li

    if (list.finished === true) { // om listan är klar
        listLi.classList.add("text-decoration-line-through"); // lägger till genomstrykning
    }   




    checkbox.addEventListener("click", () => { // när man klickar på checkbox
        listLi.classList.toggle("text-decoration-line-through"); // lägger till eller tar bort genomstrykning
        list.finished = !list.finished; // togglar finished mellan true och false
        localStorage.setItem("todos", JSON.stringify(newTodo)); // uppdaterar localStorage
    });

    app.appendChild(listLi); // lägger till li i app

});