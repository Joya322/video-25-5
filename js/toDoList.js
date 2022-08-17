//on which event will work
document.getElementById("add-button").addEventListener("click", function () {
    //get the text area
    const toDoBox = document.getElementById("to-do-box");

    //getting the text of text area
    const toDoItem = toDoBox.value;

    //getting the div on which items will be added
    const toDoList = document.getElementById("to-do-list");

    //creating a p tag
    const p = document.createElement("p");

    //adding items in p tag
    p.innerText = toDoItem;

    //append p tag to to-do-list
    toDoList.appendChild(p);

    //clearing the text area
    toDoBox.value = "";
});
