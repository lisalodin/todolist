import "./style.css";

class List {
    toDo;
    finished;

    constructor(toDo, finished) {
        this.toDo = toDo;
        this.finished = finished;
    }
}

const p1 = new List("Handla", false);
const p2 = new List("Tvätta", false);
const p3 = new List("Maila", false);
const lists = [p1, p2, p3];

    const app = document.getElementById("app"); // hämta elementet med id app
    lists.forEach(list => { // för varje sak i listan lists
        const listDiv = document.createElement("div"); // skapa en div för varje sak
        listDiv.innerHTML = `<input type="checkbox"> ${list.toDo}`;
        app.appendChild(listDiv);
    });