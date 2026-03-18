// import "./style.css";

class List { // skapar en klass som heter List som funkar som en mall för objekt
    toDo; // en egenskap toDo 
    finished; // en egenskap finished

    constructor(toDo, finished) {  // skapar en konstruktor som tar emot två parametrar som sätter värdena för egenskaperna
        this.toDo = toDo; // sätter egenskapen toDo på objektet till värdet som skickas in
        this.finished = finished; // sätter egenskapen finished på objektet till värdet som skickas in
    }
}

const p1 = new List("Handla", false); // skapar nya objekt av klassen List
const p2 = new List("Tvätta", false);
const p3 = new List("Maila", false);
const lists = [p1, p2, p3]; // skapar en array som heter lists, en lista som innehåller alla objekten



const app = document.getElementById("app"); // hämtar elementet med id:t app
app.classList.add("list-group"); // lägger till bootstrap klass för styling



let newTodo = []; // skapar en tom array för att lagra todo-objekt från localStorage eller standardvärdet

const todosFromLS = localStorage.getItem("todos"); // hämtar strängen från localStorage för att kolla om det finns något sparat
if (todosFromLS === null) { // om det inte finns något i localStorage
    localStorage.setItem("todos", JSON.stringify(lists)); // Spara då objektet i localStorage som en sträng första gången sidan laddas
    newTodo = lists;  // sätter newTodo till lists för att använda det som standardvärde 
} else { 
    newTodo = JSON.parse(todosFromLS); // om det finns något i localStorage parsar strängen till ett objekt och sätter newTodo till det
}
// newTodo är nu antingen den sparade listan från localStorage eller standardlistan lists


const createToDoElement = (list) => {  // funktion för att skapa ett todo element
    const listLi = document.createElement("li"); // skapar en li för varje sak
    listLi.classList.add("list-group-item"); // lägger till bootstrap klass för styling

    const checkbox = document.createElement("input"); // skapar en checkbox
    checkbox.type = "checkbox"; // sätter typen till checkbox
    checkbox.checked = list.finished; // sätter checkboxen till checked om listan är klar
    listLi.appendChild(checkbox); // lägger till checkboxen i li
    listLi.appendChild(document.createTextNode(list.toDo)); // lägger till texten i li


    if (list.finished === true) { // om listan är klar
        listLi.classList.add("text-decoration-line-through"); // lägger till genomstrykning
    }

    checkbox.addEventListener("click", () => { // när man klickar på checkbox
        list.finished = !list.finished; // togglar finished mellan true och false
        localStorage.setItem("todos", JSON.stringify(newTodo)); // uppdaterar localStorage

        newTodo.sort((a, b) => a.finished - b.finished); // sorterar så att klara saker hamnar längst ner
        app.innerHTML = ""; // tömmer appen så att den kan fyllas på med uppdaterade todo element
        newTodo.forEach(createToDoElement); // skapar om todo elementen i rätt ordning
    });

    app.appendChild(listLi); // lägger till li i app
}

newTodo.sort((a, b) => a.finished - b.finished); // sorterar så att klara saker hamnar längst ner
newTodo.forEach(createToDoElement); // anropar funktionen createToDoElement med varje sak i listan





const form = document.getElementById("form"); // hämtar formuläret med id:t form
form.addEventListener("submit", (event) => { // när man skickar in formuläret
    event.preventDefault(); // förhindrar sidan att laddas om vid submit så att vi kan hantera det med JavaScript istället

const textFromUser = document.getElementById("userInput").value; // hämtar värdet från inputfältet

const added = new List(textFromUser, false); // skapar ett nytt objekt av klassen List med värdet från inputfältet

newTodo.push(added); // lägger till det nya objektet i arrayen newTodo
localStorage.setItem("todos", JSON.stringify(newTodo)); // uppdaterar localStorage med det nya objektet

createToDoElement(added); // anropar funktionen createToDoElement med det nya objektet
});