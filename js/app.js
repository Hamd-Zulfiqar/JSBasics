//* Todo Model Class
class Todo {
    constructor(title, description, date, status){
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status;
    }
}

let temp = new Date();
temp = temp.getDay() + "-" + temp.getMonth() + "-" + temp.getFullYear();

//* Dummy data Array created for display
let array = [new Todo("Wake Up","You have to wake up early in morning", temp, false),
            new Todo("Wash your face","You have to wake up early in morning", temp, true),
            new Todo("Change Clothes","You have to wake up early in morning", temp, false)];

console.log(array);

//* Todo onclick handler
function taskCompleted(index){
    $("#" + index).addClass("list-group-item-success");
}

//* Ajax call try with Async Await (Promise)
$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
    async: true,
    success: function (response) {
        console.log(response[0].title);
    }
});


//* Appending to UL through vanilla JS
let list = document.getElementById("list");
array.map((todo,index) => {

    //Create the LI node first
    let item = document.createElement("LI");
    item.classList.add("list-group-item");

    if(todo.status)
        item.classList.add("list-group-item-success");
    
    item.setAttribute("id", index);

    //Creating the first Div row
    let div1 = document.createElement("div");
    div1.classList.add("row");
    item.appendChild(div1);

    //Creating first column of div1
    let div_col1 = document.createElement("div");
    div_col1.classList.add("col-sm-9");

    let title = document.createElement("h2");
    //title.setAttribute("class","display-4");
    title.innerText = todo.title; 
    div_col1.appendChild(title);

    //Creating second column of div1
    let div_col2 = document.createElement("div");
    div_col2.classList.add("col-sm-3");
    div_col2.classList.add("text-center");
    div_col2.innerText = todo.date;

    div1.appendChild(div_col1);
    div1.appendChild(div_col2);
    
    //Creating the second Div row
    let div2 = document.createElement("div");
    div2.classList.add("row");
    item.appendChild(div2);

    //Creating first column of div2
    let div_col3 = document.createElement("div");
    div_col3.classList.add("col-sm-9");
    div_col3.innerText = todo.description;

    //Creating second column of div2
    let div_col4 = document.createElement("div");
    div_col4.classList.add("col-sm-3");
    div_col4.classList.add("text-center");

    //Creating complete button
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = "Competed";

    //made a new onclick method for this approach
    button.onclick = () => {
        document.getElementById(index).classList.add("list-group-item-success");
    };

    div_col4.appendChild(button);

    div2.appendChild(div_col3);
    div2.appendChild(div_col4);

    list.appendChild(item);
});

//* Appending the Dummy data to Unordered List with id "list"
// array.map((todo,index) => {
//     if(todo.status) {
//         $("#list").append
//             (`<li class="list-group-item list-group-item-success" id="${index}">
//                 <div class="row">
//                     <div class="col-sm-9"><h2>${todo.title}</h2></div>
//                     <div class="col-sm-3 text-center">${todo.date}</div>
//                 </div>
//                 <div class="row">
//                     <div class="col-sm-9">${todo.description}</div>
//                     <div class="col-sm-3 text-center">
//                         <input id="click" class="btn" type="button" onclick="taskCompleted(${index})" value="Completed">
//                     </div>
//                 </div>
//             </li>`)
//         }
//     else{
//         $("#list").append
//             (`<li class="list-group-item " id="${index}">
//                 <div class="row">
//                     <div class="col-sm-9"><h2>${todo.title}</h2></div>
//                     <div class="col-sm-3 text-center">${todo.date}</div>
//                 </div>
//                 <div class="row">
//                     <div class="col-sm-9">${todo.description}</div>
//                     <div class="col-sm-3 text-center">
//                         <input id="click" class="btn" type="button" onclick="taskCompleted(${index})" value="Completed">
//                     </div>
//                 </div>
//             </li>`)
//     }});

