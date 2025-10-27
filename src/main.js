import "./style.css";

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
const lists = [p1, p2, p3];

    const app = document.getElementById("app"); // hämtar elementet med id app
    lists.forEach(list => { // för varje sak i listan lists
    const listLi = document.createElement("li"); // skapar en li för varje sak
    listLi.innerHTML = `<input type="checkbox"> ${list.toDo}`; // lägger till en checkbox och texten från toDo

    listLi.addEventListener("click", () => { // när man klickar på li
        list.finished = true; // sätter finished till true
        listLi.remove(); // tas li bort
    });

    app.appendChild(listLi); // lägger till lian i app

});